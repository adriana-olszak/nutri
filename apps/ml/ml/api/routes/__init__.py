from flask_restx import Namespace

matches_ns = Namespace('matches', description='Matching operations')
similar_ns = Namespace('similar-ingredients', description='Similar ingredients operations')
ns_queues = Namespace('queues', description='Queue operations')
ns_tasks = Namespace('tasks', description='Task operations')
ns_jobs = Namespace('jobs', description='Job operations')

from . import matches, similar_ingredients, jobs, queue, tasks
