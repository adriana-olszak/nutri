from flask import current_app

from ml.extensions import db
from ml.matching.processor import process_ingredient
from ml.tasks.procrastinate import procrastinate_app


@procrastinate_app.task(queue="recipe_ingredient_matching", name="match")
def perform_ingredient_matching(recipe_ingredient_id: str):
    with current_app.app_context():
        try:
            process_ingredient(recipe_ingredient_id)
        except Exception as e:
            # TODO log errors
            db.session.rollback()
            raise
