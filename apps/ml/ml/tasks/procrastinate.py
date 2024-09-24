from procrastinate import App, PsycopgConnector

procrastinate_app = App(
    connector=PsycopgConnector(
        kwargs={
            "port": 3100,
            "host": "localhost",
            "user": "nutri",
            "password": "nutri",
            "dbname": "nutri",
            "options": "-c search_path=procrastinate"
        }
    )
    , import_paths=['ml.tasks.matching_tasks', 'ml.tasks.cron'])
