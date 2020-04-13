import uvicorn
from fastapi import FastAPI
from db import database, ModelTask, dbcon
from response import BaseResponse
from pydantic import BaseModel

app = FastAPI()
database.initialize()


class Task(BaseModel):
    name: str
    description: str
    user: int


@app.get("/")
def index():
    response = BaseResponse(use_data=False)
    response.update("status", True).update("message", "Service Running")
    return response.dicts


@app.get("/task")
def get_task():
    result = []
    with dbcon.atomic() as transaction:
        try:
            result = list(ModelTask.select().dicts())
        except ErrorSavingData:
            transaction.rollback()

    response = BaseResponse()
    response.update("status", True).update("message", "Task Data").update(
        "data", result
    )
    return response.dicts


@app.post("/task")
def get_task(task: Task):
    print(Task)
    user, name, description = task.user, task.name, task.description
    result = ModelTask.insert(user=user, name=name, description=description).execute()
    response = BaseResponse()
    response.update("status", True).update("message", "Task Successfully Added").update(
        "data", result
    )
    return response.dicts


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5000)
