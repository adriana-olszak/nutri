from flask import current_app

from ml.extensions import db
from ml.matching.algorithm import match_ingredient, create_food_matches
from ml.models.models import MatchStatus, Match, RecipeIngredient, MatchQuality, MatchFood
from ml.tasks.procrastinate import procrastinate_app


@procrastinate_app.task(queue="recipe_ingredient_matching", name="match")
def perform_ingredient_matching(match_id: str):
    with current_app.app_context():
        try:
            process_match(match_id)
        except Exception as e:
            db.session.rollback()
            # Log the error
            current_app.logger.error(f"Error processing match {match_id}: {str(e)}")
            # Update match status to failed
            update_match_status(match_id, MatchStatus.AUTO_MATCHING_FAILED)
            raise


def process_match(match_id: str):
    match = db.session.query(Match).get(match_id)
    if not match:
        raise ValueError(f"No Match found with id {match_id}")

    ingredient = db.session.query(RecipeIngredient).get(match.recipe_ingredient_id)

    if not ingredient:
        raise ValueError(f"No RecipeIngredient found with id {match.recipe_ingredient_id}")
    top_matches, cross_encoder_scores = match_ingredient(ingredient)

    food_matches = create_food_matches(match, top_matches, cross_encoder_scores)

    # Add all food_matches to the database
    db.session.add_all(food_matches)
    db.session.commit()

    if len(food_matches) == 0:
        match.status = MatchStatus.PENDING_REVIEW
    elif len(food_matches) > 1:
        high_confidence_matches = [m for m in food_matches if m.match_quality == MatchQuality.HIGH]
        if len(high_confidence_matches) != 1:
            match.status = MatchStatus.PENDING_REVIEW
        else:
            apply_auto_match(match, high_confidence_matches[0])
    else:  # len(food_matches) == 1
        top_match = food_matches[0]
        if top_match.match_quality == MatchQuality.HIGH:
            apply_auto_match(match, top_match)
        else:
            match.status = MatchStatus.PENDING_REVIEW

    db.session.commit()


def apply_auto_match(match: Match, food_match: MatchFood):
    match.status = MatchStatus.AUTO_APPROVED
    match.selected_food_match = food_match
    match.recipe_ingredient.food_id = food_match.food_id
    match.recipe_ingredient.auto_matched = True


def update_match_status(match_id: str, status: MatchStatus):
    db.session.query(Match).filter_by(id=match_id).update({'status': status})
    db.session.commit()
