from pydantic import BaseModel, Field, EmailStr, constr
from typing import List, Optional

# Pydantic model for review
class Review(BaseModel):
    id: int
    user: str = Field(..., example="alex")
    comment: str = Field(..., example="Great hotel with excellent service!")
    rating: Optional[int] = Field(None, ge=1, le=5, example=5)
    hotel_id: int

    class Config:
        schema_extra = {
            "example": {
                "user": "alex",
                "comment": "Great hotel with excellent service!",
                "rating": 5
            }
        }

# class OwnerData(BaseModel):
#     name: str
#     email: EmailStr
#     password: constr(min_length=8)  # Password with a minimum length of 8 characters

#     class Config:
#         orm_mode = True
    
class OwnerData(BaseModel):
    name: str
    surname: str
    email: str
    phone: str
    password: str  # Add a password field to store the hashed password

    class Config:
        orm_mode = True    
    
    
class HotelOwnerRegister(BaseModel):
    email: EmailStr
    password: str
    name: str
    surname: str
    phone: str

class HotelOwnerLogin(BaseModel):
    email: EmailStr
    password: str    
    

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
    photos: List[str]  # list of strings (URLs)
    rating: float
    reviews: Optional[List[Review]] = []  # Reviews as a list
    

class HotelsResponse(BaseModel):
    data: List[Hotel]
    total: int    

 