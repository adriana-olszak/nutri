import os


class Config:
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
                              'postgresql://nutri:nutri@localhost:3100/nutri'

    PROCRASTINATE_DATABASE_URI = os.environ.get('PROCRASTINATE_DATABASE_URL') or \
                                 'postgresql://nutri:nutri@localhost:3100/nutri?options=-c search_path%3Dprocrastinate'

    SQLALCHEMY_TRACK_MODIFICATIONS = False
