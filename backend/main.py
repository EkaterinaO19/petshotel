# main.py
# main.py
from fastapi import FastAPI
from routes import router
import aiosqlite
from fastapi.responses import JSONResponse
from database import create_tables  # Импортируйте функцию создания таблиц

app = FastAPI()

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



