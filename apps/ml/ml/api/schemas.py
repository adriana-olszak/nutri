from flask_restx import fields


def create_dtos(api):
    return {
        'match': api.model('MatchDto', {
            'recipe_ingredient_id': fields.String(required=True, description='Recipe Ingredient ID'),
        }),
        'similar_ingredients': api.model('SimilarIngredientsDto', {
            'ingredients': fields.List(fields.String, required=True,
                                       description='List of ingredients to find similarities for')
        }),
    }
def create_responses(api):
    return {
        'match': api.model('MatchResponse', {
            'job_id': fields.Integer(description='Job ID'),
            'match_id': fields.Integer(description='Match ID'),
        }),
        'similar_ingredients': api.model('SimilarIngredientsOutput', {
            'similar_ingredients': fields.List(fields.Raw, description='List of similar ingredients')
        }),
        'error': api.model('ErrorResponse', {
            'message': fields.String(description='Error message'),
            'error_code': fields.String(
                description='Error code for the specific error')
        })
    }


def create_queue_models(api):
    return {
        'queue_model': api.model('Queue', {
            'name': fields.String,
            'jobs_count': fields.Integer,
            'todo': fields.Integer,
            'doing': fields.Integer,
            'succeeded': fields.Integer,
            'failed': fields.Integer,
            'cancelled': fields.Integer,
            'aborting': fields.Integer,
            'aborted': fields.Integer
        })
    }


def create_task_models(api):
    return {
        'task_model': api.model('Task', {
            'name': fields.String,
            'jobs_count': fields.Integer,
            'todo': fields.Integer,
            'doing': fields.Integer,
            'succeeded': fields.Integer,
            'failed': fields.Integer,
            'cancelled': fields.Integer,
            'aborting': fields.Integer,
            'aborted': fields.Integer
        })
    }


def create_job_models(api):
    return {
        'job_model': api.model('Job', {
            'id': fields.Integer,
            'queue': fields.String,
            'task': fields.String,
            'status': fields.String,
            'lock': fields.String,
            'queueing_lock': fields.String
        })
    }
