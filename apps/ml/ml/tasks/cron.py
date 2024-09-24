from flask import current_app

from ml.extensions import db
from ml.models.models import Match, MatchStatus
from ml.tasks.procrastinate import procrastinate_app
from ml.tasks.matching_tasks import perform_ingredient_matching


@procrastinate_app.periodic(cron="*/5 * * * *")  # Runs every 5 minutes
@procrastinate_app.task(queue="match_scheduler")
def schedule_pending_matches(timestamp=None):
    with current_app.app_context():
        try:
            pending_matches = db.session.query(Match).filter_by(status=MatchStatus.PENDING_MATCH).all()

            for match in pending_matches:
                match.status = MatchStatus.AUTO_MATCHING_IN_PROGRESS
                perform_ingredient_matching.configure(queueing_lock=str(match.id)).defer(match_id=str(match.id))

            db.session.commit()
            current_app.logger.info(f"Scheduled {len(pending_matches)} pending matches for processing.")
        except Exception as e:
            db.session.rollback()
            current_app.logger.error(f"Error scheduling pending matches: {str(e)}")
