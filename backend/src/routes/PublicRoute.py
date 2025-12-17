from fastapi import APIRouter

route = APIRouter(prefix="")

@route.get("/")
def indexView():
    return {
        "msg": "Server is Running at heart"
    }