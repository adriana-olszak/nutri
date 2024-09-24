from flask import Flask

from .extensions import db, api
from ml.tasks.procrastinate import procrastinate_app
from .api import routes as api_routes
from .config import Config


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    db.init_app(app)
    api.init_app(app)

    procrastinate_app.open()

    return app


app = create_app()

if __name__ == '__main__':
    app.run(debug=True)
