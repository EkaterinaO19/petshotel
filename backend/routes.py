from fastapi import APIRouter, HTTPException
from models import OwnerData, Hotel
from database import delete_hotel, insert_owner, insert_hotel, get_db_connection
from typing import List

router = APIRouter()

@router.post("/register/owner")
async def register_owner(owner_data: OwnerData):
    owner_id = await insert_owner(owner_data.dict())
    return {"message": "Owner registered successfully", "owner_id": owner_id}

@router.post("/register/hotel")
async def register_hotel(hotel_data: Hotel):
    hotel_id = await insert_hotel(hotel_data.dict())
    return {"message": "Hotel registered successfully", "hotel_id": hotel_id}

@router.get("/hotels", response_model=List[Hotel])
async def get_all_hotels():
    conn = await get_db_connection()
    try:
        cursor = await conn.execute("SELECT * FROM hotels")
        rows = await cursor.fetchall()
        await conn.close()

        # Convert rows to dictionaries
        hotels = []
        for row in rows:
            hotel = {
                "id": row["id"],
                "name": row["name"],
                "phone": row["phone"],
                "hotel_owner_name": row["hotel_owner_name"],
                "hotel_owner_surname": row["hotel_owner_surname"],
                "location": row["location"],
                "conditions": row["conditions"],
                "animal_types": row["animal_types"].split(",") if row["animal_types"] else [],  # Convert to list
                "price_per_day": row["price_per_day"],
                "photos": row["photos"].split(",") if row["photos"] else [],  # Convert to list
                "rating": row["rating"]
            }
            hotels.append(hotel)

        if not hotels:
            raise HTTPException(status_code=404, detail="No hotels found")

        return hotels
    except Exception as e:
        print(f"Error fetching hotels: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")
    

# endpoint to delete a hotel by ID
@router.delete("/hotels/{hotel_id}")
async def delete_hotel_by_id(hotel_id: int):
    conn = await get_db_connection()
    try:
        # Call the function to delete the hotel from the database
        deleted_count = await delete_hotel(hotel_id)

        if deleted_count == 0:
            raise HTTPException(status_code=404, detail="Hotel not found")

        return {"message": "Hotel deleted successfully"}
    except Exception as e:
        print(f"Error deleting hotel: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")    