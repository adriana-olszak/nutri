import uuid

from .algorithm import find_potential_matches
from .decision_tree import apply_match_decision
from ..extensions import db
from ..models.models import RecipeIngredient, MatchRecipeIngredientFood, MatchManualReview


def process_ingredient(recipe_ingredient_id):
    match_uuid = uuid.uuid4()
    ingredient = db.session.query(RecipeIngredient).get(recipe_ingredient_id)
    if not ingredient:
        raise ValueError(f"No recipe ingredient found with id {recipe_ingredient_id}")
    ingredient = db.session.query(RecipeIngredient).get(recipe_ingredient_id)
    potential_matches = find_potential_matches(ingredient.ingredientText)

    for match in potential_matches[:10]:  # Top 10 matches
        manual_review = None
        if match['needs_review']:
            manual_review = MatchManualReview(
                match_id=match_uuid
            )
        food_match = MatchRecipeIngredientFood(
            id=match_uuid,
            recipe_ingredient_id=recipe_ingredient_id,
            matched_food_id=match['matched_food_id'],
            bi_encoder_score=match['bi_encoder_score'],
            cross_encoder_score=match['cross_encoder_score'],
            rank=match['rank'],
            confidence=match['confidence'],
            algorithm_version=match['algorithm'],
            needs_review=match['needs_review'],
            manual_review_id=manual_review.id,
            match_quality=match['match_quality'],
            match_type=match['match_type'],
            potential_nutritional_impact=match['potential_nutritional_impact'],
            nutritional_confidence=match['nutritional_confidence'],
            substitution_complexity=match['substitution_complexity'],
        )
        food_match.save()
        db.session.add_all([food_match, manual_review])

    apply_match_decision(ingredient, potential_matches)
    db.session.commit()
