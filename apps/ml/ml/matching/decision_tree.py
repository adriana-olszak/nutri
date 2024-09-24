from ml.extensions import db
from ml.models.models import MatchRecipeIngredientFood


def apply_match_decision(ingredient, matches):
    if not matches:
        return

    top_match = matches[0]

    top_match_entry = db.session.query(MatchRecipeIngredientFood).get(ingredient.id,
                                                                      top_match['food_id'])

    if top_match['score'] > 0.95:
        ingredient.update(foodId=top_match['food_id'], autoMatched=True)
        top_match_entry.update(reviewStatus='APPROVED', needsReview=False)
    else:
        for match in matches:
            match.update(needsReview=True)
