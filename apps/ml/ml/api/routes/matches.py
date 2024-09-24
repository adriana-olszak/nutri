from flask_restx import Resource
from procrastinate.exceptions import AlreadyEnqueued
from sqlalchemy.exc import IntegrityError
from werkzeug.exceptions import NotFound, Conflict

from ml.extensions import db
from ml.models.models import RecipeIngredient, Match, MatchStatus
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
        409: 'Conflict - Match already exists',
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

        # Check if a Match already exists for this RecipeIngredient
        existing_match = db.session.query(Match).filter_by(recipe_ingredient_id=recipe_ingredient_id).first()
        if existing_match:
            raise Conflict(description='Match already exists for this Recipe Ingredient')

        # Create a new Match
        try:
            new_match = Match(recipe_ingredient_id=recipe_ingredient_id, status=MatchStatus.PENDING_MATCH)
            db.session.add(new_match)
            db.session.commit()
        except IntegrityError:
            db.session.rollback()
            raise Conflict(description='Match already exists for this Recipe Ingredient')

        # Enqueue the matching job
        try:
            job_id = perform_ingredient_matching.configure(queueing_lock=str(new_match.id)).defer(
                match_id=str(new_match.id))
        except AlreadyEnqueued:
            raise Conflict(description='Matching job already enqueued for this Recipe Ingredient')

        return {'job_id': job_id, 'match_id': str(new_match.id)}, 201
