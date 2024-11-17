from pydantic import BaseModel, Field
from typing import List, Optional

# Pydantic model for review
class Review(BaseModel):
    id: int
    user: str = Field(..., example="alex")
    comment: str = Field(..., example="Great hotel with excellent service!")
    rating: Optional[int] = Field(None, ge=1, le=5, example=5)
    hotel_id: int

    # class Config:
    #     schema_extra = {
    #         "example": {
    #             "user": "alex",
    #             "comment": "Great hotel with excellent service!",
    #             "rating": 5
    #         }
    #     }

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
    animal_types: List[str]  # Ensure this is a list of strings
    price_per_day: float
    photos: List[str]  # Ensure this is a list of strings (URLs)
    rating: float
    reviews: Optional[List[Review]] = []  # Reviews as a list
    
    

# class HotelIn(BaseModel):
#     id: int
#     name: str
#     phone: str
#     hotel_owner_name: str
#     hotel_owner_surname: str
#     location: str
#     conditions: str
#     animal_types: List[str]  
#     price_per_day: float
#     photos: List[str]  
#     rating: float
#     reviews: Optional [List[Review]] = []    