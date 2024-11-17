from fastapi import APIRouter, HTTPException, Query
from models import OwnerData, Hotel, Review
from database import delete_hotel, get_reviews_by_hotel, insert_owner, insert_hotel, get_db_connection, insert_review
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
async def get_all_hotels(page: int = Query(1, ge=1), page_size: int = Query(10, ge=1, le=100)):
    offset = (page - 1) * page_size
    conn = await get_db_connection()
    try:
        query = f"SELECT * FROM hotels LIMIT {page_size} OFFSET {offset}"
        cursor = await conn.execute(query)
        hotel_rows = await cursor.fetchall()

        hotels = []

        for row in hotel_rows:
            # Convert the data from the database into a valid Hotel object
            hotel = {
                "id": row["id"],
                "name": row["name"],
                "phone": row["phone"],
                "hotel_owner_name": row["hotel_owner_name"],
                "hotel_owner_surname": row["hotel_owner_surname"],
                "location": row["location"],
                "conditions": row["conditions"],
                "animal_types": row["animal_types"].split(",") if row["animal_types"] else [],  # Convert CSV to list
                "price_per_day": row["price_per_day"],
                "photos": row["photos"].split(",") if row["photos"] else [],  # Convert CSV to list
                "rating": row["rating"]
            }

            # Add reviews for the hotel
            reviews = await get_reviews_by_hotel(hotel["id"])
            hotel["reviews"] = reviews

            hotels.append(hotel)

        if not hotels:
            raise HTTPException(status_code=404, detail="No hotels found")

        return hotels  # Return the list directly
    except Exception as e:
        print(f"Error fetching hotels: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")
    finally:
        await conn.close()

        

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
    
# Route to get all reviews for a hotel
@router.get("/hotels/{hotel_id}/reviews")
async def get_hotel_reviews(hotel_id: int):
    reviews = await get_reviews_by_hotel(hotel_id)
    if reviews is None:
        raise HTTPException(status_code=404, detail="Reviews not found")
    return reviews  # Ensure this is a list of reviews or a valid structure

# Route to post a new review for a hotel
@router.post("/hotels/{hotel_id}/reviews")
async def add_hotel_review(hotel_id: int, review: Review):
    review_data = review.dict()  # Convert Pydantic model to dictionary
    review_data['hotel_id'] = hotel_id  # Add hotel_id separately
    review_id = await insert_review(review_data)  # Insert review with hotel_id
    return {"message": "Review added successfully", "review_id": review_id}





