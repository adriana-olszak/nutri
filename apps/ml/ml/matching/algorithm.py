from datetime import datetime, UTC

from sentence_transformers import SentenceTransformer, CrossEncoder

from ml.extensions import db
from ml.models.models import Food, RecipeIngredient, FoodEmbedding, MatchFood, Match, MatchType
from ml.utils.logging import setup_logger

# Initialize models
bi_encoder = SentenceTransformer('all-MiniLM-L6-v2')
cross_encoder = CrossEncoder('cross-encoder/stsb-roberta-large')

# Setup logging
logger = setup_logger(__name__)


def match_ingredient(ingredient_text: str):
    logger.debug(f"Starting matching process for ingredient: {ingredient_text}")

    # Encode the ingredient text
    ingredient_vector = bi_encoder.encode(ingredient_text)
    logger.debug(f"Encoded ingredient vector shape: {ingredient_vector.shape}")

    logger.info('Querying for top matches')
    # Query for top 10 matches using cosine distance
    top_matches = db.session.scalars(
        db.select(Food)
        .join(FoodEmbedding)
        .filter(
            FoodEmbedding.embedding_type == 'sentenceTransformer',
            FoodEmbedding.model_version == 'all-MiniLM-L6-v2'
        )
        .order_by(FoodEmbedding.embedding.cosine_distance(ingredient_vector))
        .limit(10)
    ).all()

    if not top_matches:
        logger.warning(f"No matches found for ingredient: {ingredient_text}")
        return [], []

    logger.info(f'Found {len(top_matches)} potential matches')
    logger.debug(f"Top matches: {[food.description for food in top_matches]}")

    logger.info('Querying for distances')
    # Get distances for the top matches
    distances = db.session.scalars(
        db.select(FoodEmbedding.embedding.cosine_distance(ingredient_vector))
        .filter(
            FoodEmbedding.food_id.in_([food.id for food in top_matches]),
            FoodEmbedding.embedding_type == 'sentenceTransformer',
            FoodEmbedding.model_version == 'all-MiniLM-L6-v2'
        )
    ).all()

    logger.debug(f"Distances: {distances}")

    # Prepare inputs for cross-encoder
    cross_encoder_inputs = [(ingredient_text, food.description) for food in top_matches]

    logger.info('Getting cross-encoder scores')
    # Get cross-encoder scores
    cross_encoder_scores = cross_encoder.predict(cross_encoder_inputs) if cross_encoder_inputs else []
    logger.debug(f"Cross-encoder scores: {cross_encoder_scores}")

    logger.info('Preparing the final results')
    # Prepare the final results
    # Convert distance to similarity score (1 - distance)
    final_matches = [(food.id, 1 - distance) for food, distance in zip(top_matches, distances)]
    final_cross_scores = [float(score) for score in cross_encoder_scores]

    logger.debug(f"Final matches: {final_matches}")
    logger.debug(f"Final cross scores: {final_cross_scores}")

    return final_matches, final_cross_scores


def calculate_confidence(bi_score, cross_score):
    confidence = (bi_score + cross_score) / 2
    logger.debug(f"Calculated confidence: {confidence} (bi_score: {bi_score}, cross_score: {cross_score})")
    return confidence


def determine_match_quality(confidence):
    if confidence > 0.9:
        quality = 'EXACT'
    elif confidence > 0.8:
        quality = 'HIGH'
    elif confidence > 0.6:
        quality = 'MEDIUM'
    elif confidence > 0.4:
        quality = 'LOW'
    else:
        quality = 'POOR'
    logger.debug(f"Determined match quality: {quality} for confidence: {confidence}")
    return quality


def create_food_matches(match: Match, top_matches, cross_encoder_scores):
    logger.info(f"Creating food matches for match ID: {match.id}")
    matches = []
    current_time = datetime.now(UTC)
    for rank, ((food_id, bi_score), cross_score) in enumerate(zip(top_matches, cross_encoder_scores), 1):
        confidence = calculate_confidence(bi_score, cross_score)
        match_quality = determine_match_quality(confidence)

        if match_quality == 'POOR':
            logger.debug(f"Skipping poor quality match: food_id={food_id}, confidence={confidence}")
            continue

        algorithm_data = {
            "bi_encoder_score": bi_score,
            "cross_encoder_score": cross_score
        }

        food_match = MatchFood(
            match_id=match.id,
            food_id=food_id,
            rank=rank,
            confidence=confidence,
            match_quality=match_quality,
            match_type=MatchType.AUTOMATIC,
            algorithm_version='v1.0',
            algorithm_data=algorithm_data,
            created_at=current_time,
            updated_at=current_time
        )
        matches.append(food_match)
        logger.debug(
            f"Created food match: food_id={food_id}, rank={rank}, confidence={confidence}, quality={match_quality}")

    logger.info(f"Created {len(matches)} food matches")
    return matches
