from flask import current_app

from ml.extensions import db
from ml.matching.algorithm import match_ingredient, create_food_matches
from ml.models.models import MatchStatus, Match, RecipeIngredient, MatchQuality, MatchFood
from ml.tasks.procrastinate import procrastinate_app
from ml.utils.logging import setup_logger

logger = setup_logger(__name__)


@procrastinate_app.task(queue="recipe_ingredient_matching", name="match")
def perform_ingredient_matching(match_id: str):
    with current_app.app_context():
        try:
            logger.info(f"Starting ingredient matching process for match ID: {match_id}")
            process_match(match_id)
            logger.info(f"Completed ingredient matching process for match ID: {match_id}")
        except Exception as e:
            db.session.rollback()
            logger.error(f"Error processing match {match_id}: {str(e)}", exc_info=True)
            update_match_status(match_id, MatchStatus.AUTO_MATCHING_FAILED)
            raise


def process_match(match_id: str):
    match = db.session.query(Match).get(match_id)
    if not match:
        logger.error(f"No Match found with id {match_id}")
        raise ValueError(f"No Match found with id {match_id}")

    logger.info(f"Processing match for ingredient text: {match.ingredient_text}")
    top_matches, cross_encoder_scores = match_ingredient(match.ingredient_text)

    food_matches = create_food_matches(match, top_matches, cross_encoder_scores)

    logger.info(f"Adding {len(food_matches)} food matches to the database")
    db.session.add_all(food_matches)
    db.session.commit()

    if len(food_matches) == 0:
        logger.info("No food matches found, setting status to PENDING_REVIEW")
        match.status = MatchStatus.PENDING_REVIEW
    elif len(food_matches) > 1:
        high_confidence_matches = [m for m in food_matches if m.match_quality == MatchQuality.HIGH]
        if len(high_confidence_matches) != 1:
            logger.info("Multiple or no high confidence matches found, setting status to PENDING_REVIEW")
            match.status = MatchStatus.PENDING_REVIEW
        else:
            logger.info("One high confidence match found, applying auto match")
            apply_auto_match(match, high_confidence_matches[0])
    else:  # len(food_matches) == 1
        top_match = food_matches[0]
        if top_match.match_quality == MatchQuality.HIGH:
            logger.info("Single high confidence match found, applying auto match")
            apply_auto_match(match, top_match)
        else:
            logger.info("Single match found but not high confidence, setting status to PENDING_REVIEW")
            match.status = MatchStatus.PENDING_REVIEW

    logger.info(f"Committing changes for match ID: {match_id}")
    db.session.commit()


def apply_auto_match(match: Match, food_match: MatchFood):
    logger.info(f"Applying auto match for match ID: {match.id}, food ID: {food_match.food_id}")
    match.status = MatchStatus.AUTO_APPROVED
    match.selected_food_match = food_match
    for recipe_ingredient in match.recipe_ingredients:
        recipe_ingredient.food_id = food_match.food_id

def update_match_status(match_id: str, status: MatchStatus):
    logger.info(f"Updating match status to {status} for match ID: {match_id}")
    db.session.query(Match).filter_by(id=match_id).update({'status': status})
    db.session.commit()
