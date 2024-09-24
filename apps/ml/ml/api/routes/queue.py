from flask_restx import Resource
from procrastinate.manager import JobManager

from ml.api.routes import ns_queues
from ml.api.schemas import create_queue_models
from ml.tasks.procrastinate import procrastinate_app

queue_model = create_queue_models(ns_queues)
job_manager = JobManager(procrastinate_app.connector)


@ns_queues.route('/')
class QueueList(Resource):
    @ns_queues.marshal_list_with(queue_model['queue_model'])
    def get(self):
        """List all queues and their stats"""
        return list(job_manager.list_queues())
