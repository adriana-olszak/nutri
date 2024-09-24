from flask_restx import Resource

from . import similar_ns
from ..schemas import create_dtos, create_responses

dto = create_dtos(similar_ns)
res = create_responses(similar_ns)


@similar_ns.route('')
class SimilarIngredients(Resource):
    @similar_ns.expect(dto['similar_ingredients'])
    @similar_ns.marshal_with(res['similar_ingredients'])
    def post(self):
        """Find similar ingredients"""
        # TODO implement
