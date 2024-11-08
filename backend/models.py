from pydantic import BaseModel
from typing import List

class Review(BaseModel):
    user: str
    comment: str
    rating: float

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
    animal_types: List[str]  
    price_per_day: float
    photos: List[str]  
    rating: float
    reviews: List[Review]
    
    

    