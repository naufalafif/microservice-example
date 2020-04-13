from peewee import Model, SqliteDatabase

db = SqliteDatabase("task.db")

class BaseModel(Model):
    class Meta:
        database = db
