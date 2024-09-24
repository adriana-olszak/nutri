from flask_restx import Resource
from procrastinate.exceptions import AlreadyEnqueued
from werkzeug.exceptions import NotFound, Conflict

from ml.extensions import db
from ml.models.models import RecipeIngredient
from ml.tasks.matching_tasks import perform_ingredient_matching
from ml.utils.logging import setup_logger
from . import matches_ns
from ..schemas import create_dtos, create_responses
from ...utils.validators import is_valid_uuid

dtos = create_dtos(matches_ns)
res = create_responses(matches_ns)

api_logger = setup_logger(__name__)


@matches_ns.route('')
class MatchesList(Resource):
    @matches_ns.expect(dtos['match'], validate=True)
    @matches_ns.marshal_with(res['match'], code=201)
    @matches_ns.doc(responses={
        201: 'Successfully started matching process',
        400: 'Bad request',
        404: 'Recipe Ingredient not found',
        409: 'Conflict - Job already exists',
        500: 'Internal server error'
    })
    def post(self):
        """Start a new ingredient matching process"""
        match_data = matches_ns.payload
        recipe_ingredient_id = match_data['recipe_ingredient_id']

        if not is_valid_uuid(recipe_ingredient_id):
            raise ValueError('Recipe Ingredient ID must be a valid uuid')

        recipe_ingredient = db.session.query(RecipeIngredient).get(recipe_ingredient_id)
        if not recipe_ingredient:
            raise NotFound(description='Recipe Ingredient not found')

        try:
            job_id = perform_ingredient_matching.configure(queueing_lock=str(recipe_ingredient_id)).defer(
                recipe_ingredient_id=str(recipe_ingredient_id))
        except AlreadyEnqueued:
            raise Conflict(description='Recipe Ingredient already enqueued')

        return {'job_id': job_id}, 201
