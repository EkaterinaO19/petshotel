from pydantic import BaseModel
from typing import List

class OwnerData(BaseModel):
    name: str
    surname: str
    email: str
    phone: str

class Hotel(BaseModel):
    id: int
    name: str
    phone: str
    hotel_owner_name: str
    hotel_owner_surname: str
    location: str
    conditions: str
    animal_types: List[str]  # Assuming this is a list
    price_per_day: float
    photos: List[str]  # Assuming this is a list
    rating: float