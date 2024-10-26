# main.py
from fastapi import FastAPI
from routes import router
import aiosqlite
from fastapi.responses import JSONResponse
from database import create_tables  
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

# Allow CORS for specified origins
origins = [
    "http://localhost:3000",  # Your frontend URL
    # You can add more origins if needed
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)


@app.on_event("startup")
async def startup_event():
    await create_tables()  # Вызовите функцию для создания таблиц при старте приложения

@app.on_event("shutdown")
async def shutdown_event():
    pass  # Здесь можно добавить код для завершения работы, если это необходимо
    
@app.get("/")
async def root():
    return {"message": "Welcome to the Pet Hotel API!"}

# Подключаем маршруты
app.include_router(router)

# Обработка ошибок
@app.exception_handler(Exception)
async def exception_handler(request, exc):
    return JSONResponse(
        status_code=500,
        content={"message": str(exc)}
    )

# Команда для запуска: uvicorn main:app --reload



