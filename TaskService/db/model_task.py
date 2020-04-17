from .base import BaseModel
from peewee import *


class Task(BaseModel):
    id = BigAutoField(primary_key=True)
    name = TextField(null=False)
    description = TextField(null=False)
    done = BooleanField(default=False)
