from functools import wraps
from http.client import HTTPException

from flask_restx import abort
from procrastinate.exceptions import AlreadyEnqueued
from sqlalchemy.exc import SQLAlchemyError

from ml.extensions import db
from ml.utils.logging import setup_logger

logger = setup_logger('error_handler')


def handle_exceptions(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        try:
            return f(*args, **kwargs)
        except HTTPException as e:
            raise e
        except ValueError as e:
            abort(400, str(e))
        except SQLAlchemyError as e:
            logger.error(f"Database error: {str(e)}")
            db.session.rollback()
            abort(500, 'A database error occurred. Please try again later.')
        except AlreadyEnqueued as e:
            logger.warning(f"Job already enqueued: {str(e)}")
            abort(409, 'This job is already enqueued for processing.')
        except Exception as e:
            logger.error(f"Unexpected error: {str(e)}", exc_info=True)
            abort(500, 'An unexpected error occurred. Please try again later.')

    return wrapper
