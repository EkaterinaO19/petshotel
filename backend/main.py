# main.py
from fastapi import FastAPI
from routes import router

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Welcome to the Pet Hotel API!"}

# Подключаем маршруты
app.include_router(router)

# Команда для запуска: uvicorn main:app --reload