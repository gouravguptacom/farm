from fastapi import FastAPI
from routes.PublicRoute import route as PublicRoute

app = FastAPI()

# add routes
app.include_router(PublicRoute)