from sentence_transformers import SentenceTransformer, CrossEncoder

from ml.extensions import db
from ml.models.models import Food, RecipeIngredient, MatchRecipeIngredientFood, FoodEmbedding
from ml.utils.logging import setup_logger
from datetime import datetime, UTC

# Initialize models
bi_encoder = SentenceTransformer('all-MiniLM-L6-v2')
cross_encoder = CrossEncoder('cross-encoder/stsb-roberta-large')

# Setup logging
logger = setup_logger(__name__)


def match_ingredient(ingredient: RecipeIngredient):
    # Check for existing matches first
    existing_match = db.session.query(MatchRecipeIngredientFood).filter_by(
        recipe_ingredient_id=ingredient.id,
        match_type='AUTOMATIC'
    ).order_by(MatchRecipeIngredientFood.confidence.desc()).first()

    if existing_match:
        return [(existing_match.matched_food_id, existing_match.bi_encoder_score)], [existing_match.cross_encoder_score]

    # Encode the ingredient text
    ingredient_vector = bi_encoder.encode(ingredient.ingredient_text)
    logger.info('querying for top matches')

    # Query for top 5 matches using cosine distance
    top_matches = db.session.scalars(
        db.select(Food)
        .join(FoodEmbedding)
        .filter(
            FoodEmbedding.embedding_type == 'sentenceTransformer',
            FoodEmbedding.model_version == 'all-MiniLM-L6-v2'
        )
        .order_by(FoodEmbedding.embedding.cosine_distance(ingredient_vector))
        .limit(5)
    ).all()

    if not top_matches:
        logger.warning(f"No matches found for ingredient: {ingredient.ingredient_text}")
        return [], []

    logger.info('querying for distances')

    # Get distances for the top matches
    distances = db.session.scalars(
        db.select(FoodEmbedding.embedding.cosine_distance(ingredient_vector))
        .filter(
            FoodEmbedding.food_id.in_([food.id for food in top_matches]),
            FoodEmbedding.embedding_type == 'sentenceTransformer',
            FoodEmbedding.model_version == 'all-MiniLM-L6-v2'
        )
    ).all()

    # Prepare inputs for cross-encoder
    cross_encoder_inputs = [(ingredient.ingredient_text, food.description) for food in top_matches]

    logger.info('Get cross-encoder scores')
    # Get cross-encoder scores
    cross_encoder_scores = cross_encoder.predict(cross_encoder_inputs) if cross_encoder_inputs else []

    logger.info('Prepare the final results')
    # Prepare the final results
    # Convert distance to similarity score (1 - distance)
    final_matches = [(food.id, 1 - distance) for food, distance in zip(top_matches, distances)]
    final_cross_scores = [float(score) for score in cross_encoder_scores]

    return final_matches, final_cross_scores


def calculate_confidence(bi_score, cross_score):
    # You might want to fine-tune this formula based on your specific needs
    return (bi_score + cross_score) / 2


def determine_match_quality(confidence):
    if confidence > 0.9:
        return 'EXACT'
    elif confidence > 0.8:
        return 'HIGH'
    elif confidence > 0.6:
        return 'MEDIUM'
    elif confidence > 0.4:
        return 'LOW'
    else:
        return 'POOR'


def create_food_matches(ingredient: RecipeIngredient, top_matches, cross_encoder_scores):
    matches = []
    current_time = datetime.now(UTC)
    for rank, ((food_id, bi_score), cross_score) in enumerate(zip(top_matches, cross_encoder_scores), 1):
        confidence = calculate_confidence(bi_score, cross_score)
        match_quality = determine_match_quality(confidence)
        needs_review = match_quality in ['LOW', 'POOR']

        match = MatchRecipeIngredientFood(
            recipe_ingredient_id=ingredient.id,
            matched_food_id=food_id,
            bi_encoder_score=bi_score,
            cross_encoder_score=cross_score,
            rank=rank,
            confidence=confidence,
            algorithm_version='v1.0',
            needs_review=needs_review,
            match_quality=match_quality,
            match_type='AUTOMATIC',
            created_at=current_time,
            updated_at=current_time
        )
        matches.append(match)

    return matches


def apply_match_decision(ingredient, matches):
    if len(matches) == 0:
        return

    top_match = matches[0]

    if top_match['confidence'] > 0.95:
        ingredient.food_id = top_match['matched_food_id']
        ingredient.auto_matched = True
        db.session.query(MatchRecipeIngredientFood).filter_by(
            id=top_match['id']
        ).update({
            'match_type': 'AUTOMATIC',
            'needs_review': False
        })
    elif top_match['confidence'] > 0.8:
        ingredient.food_id = top_match['matched_food_id']
        ingredient.auto_matched = False
    else:
        ingredient.auto_matched = False

    db.session.commit()
