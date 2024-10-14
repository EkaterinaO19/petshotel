# routes.py
from fastapi import APIRouter, HTTPException
from models import Owner, Hotel
from database import database

router = APIRouter()

# создание профиля владельца
@router.post("/owners/")
async def create_owner(owner: Owner):
    owner_data = owner.dict()
    result = await database["owners"].insert_one(owner_data)
    return {"id": str(result.inserted_id)}

# получение данных владельца
@router.get("/owners/{owner_id}")
async def get_owner(owner_id: str):
    owner = await database["owners"].find_one({"_id": owner_id})
    if owner:
        return owner
    raise HTTPException(status_code=404, detail="Owner not found")

# создание отеля
@router.post("/hotels/")
async def create_hotel(hotel: Hotel):
    hotel_data = hotel.dict()
    result = await database["hotels"].insert_one(hotel_data)
    return {"id": str(result.inserted_id)}

# получить список отелей
@router.get("/hotels/")
async def get_hotels():
    hotels = await database["hotels"].find().to_list(100)
    return hotels