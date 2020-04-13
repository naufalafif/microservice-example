from .base import db
from .model_task import Task


class Database:
    def __init__(self, db, models=None):
        self.db = db
        self.models = models
        if models is None:
            raise BaseException("No Table Found, Please Create Table First")

    def initialize(self):
        self.db.connect()
        self.db.create_tables(self.models)
        self.db.close()

    def connect(self):
        db.connect()

    def close(self):
        db.close()


models = [Task]
database = Database(db, models)
