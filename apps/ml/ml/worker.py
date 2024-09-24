import click
from flask.cli import with_appcontext

from ml.tasks.procrastinate import procrastinate_app


@click.command()
@with_appcontext
def run_worker():
    """Run the Procrastinate worker."""
    procrastinate_app.open()
    try:
        procrastinate_app.run_worker(concurrency=1)  # Adjust concurrency as needed
    finally:
        procrastinate_app.close()


if __name__ == "__main__":
    run_worker()
