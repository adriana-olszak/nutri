from ..extensions import api
from .routes import matches_ns, similar_ns, ns_jobs, ns_tasks, ns_queues
api.add_namespace(matches_ns)
api.add_namespace(similar_ns)
api.add_namespace(ns_queues)
api.add_namespace(ns_jobs)
api.add_namespace(ns_tasks)
