from .algorithm import match_ingredient, create_food_matches
from ..extensions import db
from ..models.models import RecipeIngredient


def process_ingredient(recipe_ingredient_id: str):
    ingredient = db.session.query(RecipeIngredient).get(recipe_ingredient_id)
    if not ingredient:
        raise ValueError(f"No RecipeIngredient found with id {recipe_ingredient_id}")

    top_matches, cross_encoder_scores = match_ingredient(ingredient)

    matches = create_food_matches(ingredient, top_matches, cross_encoder_scores)

    # Add all matches to the database
    db.session.add_all(matches)
    db.session.commit()

    if len(matches):
        # Apply decision logic to the top match
        top_match = matches[0]
        if top_match.confidence > 0.95:
            ingredient.food_id = top_match.matched_food_id
            ingredient.auto_matched = True
            top_match.needs_review = False
        elif top_match.confidence > 0.8:
            ingredient.food_id = top_match.matched_food_id
            ingredient.auto_matched = False
        else:
            ingredient.auto_matched = False

    db.session.commit()

    return matches
