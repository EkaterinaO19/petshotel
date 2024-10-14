# database.py
from motor.motor_asyncio import AsyncIOMotorClient

MONGO_DETAILS = "mongodb://localhost:27017"  # адрес базы данных

client = AsyncIOMotorClient(MONGO_DETAILS)
database = client["pet_boarding"]  # название базы данных


# Получение коллекций
owners_collection = database["owners"]  # Коллекция для владельцев животных
hotels_collection = database["hotels"]  # Коллекция для гостиниц