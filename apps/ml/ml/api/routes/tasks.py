from flask_restx import Resource
from procrastinate.manager import JobManager

from ml.api.routes import ns_tasks
from ml.api.schemas import create_task_models
from ml.tasks.procrastinate import procrastinate_app

task_model = create_task_models(ns_tasks)
job_manager = JobManager(procrastinate_app.connector)


@ns_tasks.route('/')
class TaskList(Resource):
    @ns_tasks.marshal_list_with(task_model['task_model'])
    def get(self):
        """List all tasks and their stats"""
        return list(job_manager.list_tasks())
