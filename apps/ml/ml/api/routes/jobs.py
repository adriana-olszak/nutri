from datetime import datetime

from flask_restx import Resource
from procrastinate.manager import JobManager

from ml.api.routes import ns_jobs
from ml.api.schemas import create_job_models
from ml.extensions import api
from ml.tasks.procrastinate import procrastinate_app

job_model = create_job_models(ns_jobs)
job_manager = JobManager(procrastinate_app.connector)


@ns_jobs.route('/<int:job_id>')
class Job(Resource):
    @ns_jobs.marshal_with(job_model['job_model'])
    def get(self, job_id):
        """Get a specific job"""
        jobs = list(job_manager.list_jobs(id=job_id))
        return jobs[0] if jobs else api.abort(404, "Job not found")

    @ns_jobs.doc(params={'abort': 'Abort the job if it\'s running', 'delete_job': 'Delete the job after cancelling'})
    def delete(self, job_id):
        """Cancel a job"""
        abort = api.payload.get('abort', False)
        delete_job = api.payload.get('delete_job', False)
        success = job_manager.cancel_job_by_id(job_id, abort=abort, delete_job=delete_job)
        return {"success": success}, 200 if success else 404


@ns_jobs.route('/<int:job_id>/retry')
class JobRetry(Resource):
    @ns_jobs.doc(params={
        'retry_at': 'Retry the job at this time (ISO format)',
        'priority': 'New priority for the job',
        'queue': 'New queue for the job',
        'lock': 'New lock for the job'
    })
    def post(self, job_id):
        """Retry a job"""
        retry_at = api.payload.get('retry_at')
        if retry_at:
            retry_at = datetime.fromisoformat(retry_at)
        priority = api.payload.get('priority')
        queue = api.payload.get('queue')
        lock = api.payload.get('lock')

        job_manager.retry_job_by_id(job_id, retry_at=retry_at, priority=priority, queue=queue, lock=lock)
        return {"message": "Job scheduled for retry"}, 200


@ns_jobs.route('/delete_old')
class DeleteOldJobs(Resource):
    @ns_jobs.doc(params={
        'nb_hours': 'Delete jobs older than this many hours',
        'queue': 'Filter by queue name',
        'include_error': 'Include errored jobs',
        'include_cancelled': 'Include cancelled jobs',
        'include_aborted': 'Include aborted jobs'
    })
    def delete(self):
        """Delete old jobs"""
        nb_hours = int(api.payload.get('nb_hours', 24))
        queue = api.payload.get('queue')
        include_error = api.payload.get('include_error', False)
        include_cancelled = api.payload.get('include_cancelled', False)
        include_aborted = api.payload.get('include_aborted', False)

        job_manager.delete_old_jobs(
            nb_hours, queue=queue,
            include_error=include_error,
            include_cancelled=include_cancelled,
            include_aborted=include_aborted
        )
        return {"message": "Old jobs deleted"}, 200
