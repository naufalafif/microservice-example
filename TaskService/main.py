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


@app.get("/")
def index():
    response = BaseResponse(use_data=False)
    response.update("status", True).update("message", "Service Running")
    return response.dicts


@app.get("/task")
def get_task():
    result = list(ModelTask.select().dicts())
    response = BaseResponse()
    response.update("status", True).update("message", "Task Data").update(
        "data", result
    )
    return response.dicts


@app.post("/task")
def get_task(task: Task):
    result = None
    name, description = task.name, task.description
    result = ModelTask.insert(name=name, description=description).execute()
    response = BaseResponse()
    response.update("status", True).update("message", "Task Successfully Added").update(
        "data", result
    )
    return response.dicts


@app.delete("/task/{task_id}")
def delete_task(task_id: int):
    result = ModelTask.delete().where(ModelTask.id == task_id).execute()
    response = BaseResponse()
    response.update("status", True).update(
        "message", "Task Successfully Deleted"
    ).update("data", result)
    return response.dicts


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5000)
