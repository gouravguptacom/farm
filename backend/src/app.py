from fastapi import FastAPI
from routes.PublicRoute import route as PublicRoute

# cors error solution
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origin = [
    "http://localhost",
    "*", # anyone can access
]

app.add_middleware(
    CORSMiddleware, 
    allow_origins=origin, 
    allow_credentials=True, 
    allow_methods=["*"], 
    allow_headers=["*"]
)

# add routes
app.include_router(PublicRoute)