# routes.py
from fastapi import APIRouter, HTTPException
from models import Owner, Hotel
from database import database
from typing import Optional, List, Dict
from pydantic import BaseModel, Field


router = APIRouter()

from fastapi import APIRouter, Depends, HTTPException
from typing import List

router = APIRouter()

# Модели для данных
class OwnerData(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None

    class Config:
        schema_extra = {
            "example": {
                "name": "Alice Smith",
                "email": "alice@example.com",
                "phone": "123-456-7890"
            }
        }

class HotelOwnerData(BaseModel):
    name: str
    email: str
    address: str

    class Config:
        schema_extra = {
            "example": {
                "name": "John Doe",
                "email": "john@example.com",
                "address": "123 Main St, City"
            }
        }

class ProfileData(BaseModel):
    animal_name: str
    animal_age: int
    breed: str
    gender: str

    class Config:
        schema_extra = {
            "example": {
                "animal_name": "Buddy",
                "animal_age": 3,
                "breed": "Golden Retriever",
                "gender": "male"
            }
        }

class StayDates(BaseModel):
    start_date: str
    end_date: str

    class Config:
        schema_extra = {
            "example": {
                "start_date": "2023-10-01",
                "end_date": "2023-10-10"
            }
        }

class PaymentData(BaseModel):
    amount: float
    method: str

    class Config:
        schema_extra = {
            "example": {
                "amount": 150.0,
                "method": "credit_card"
            }
        }

# Роуты с примерами
@router.post("/register/owner")
async def register_owner(owner_data: OwnerData):
    return {"message": "Owner registered successfully"}

@router.post("/register/hotel-owner")
async def register_hotel_owner(hotel_owner_data: HotelOwnerData):
    return {"message": "Hotel owner registered successfully"}

@router.post("/profile/{user_id}/create")
async def create_profile(user_id: int, profile_data: ProfileData):
    return {"message": f"Profile for user {user_id} created"}

@router.get("/hotels/search")
async def search_hotels(
    district: Optional[str] = None,
    animal_type: Optional[str] = None,
    price_range: Optional[str] = None,
    rating: Optional[int] = None,
    conditions: Optional[str] = None
):
    return {"message": "Filtered hotels list"}

@router.get("/hotels/{hotel_id}")
async def get_hotel_details(hotel_id: int):
    return {"message": f"Details of hotel {hotel_id}"}

@router.post("/booking/select-hotel")
async def select_hotel(hotel_id: int, user_id: int, stay_dates: StayDates):
    return {"message": "Hotel selected and availability checked"}

@router.post("/booking/generate-agreement")
async def generate_agreement(booking_id: int):
    return {"message": f"Agreement generated for booking {booking_id}"}

@router.post("/booking/confirm-payment")
async def confirm_payment(booking_id: int, payment_data: PaymentData):
    return {"message": f"Payment confirmed for booking {booking_id}"}

@router.post("/booking/send-confirmation")
async def send_confirmation(booking_id: int):
    return {"message": f"Confirmation sent for booking {booking_id}"}