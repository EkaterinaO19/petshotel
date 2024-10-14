# models.py
from pydantic import BaseModel, Field
from typing import Optional, List

class Pet(BaseModel):
    name: str                         # Имя питомца
    chip_id: Optional[str] = None      # Идентификационный номер чипа (опционально)
    passport_url: Optional[str] = None # URL на документ или ветпаспорт (опционально)
    species: str                       # Название животного (например, кошка, собака)
    age: Optional[int] = None          # Возраст животного (опционально)
    breed: Optional[str] = None        # Порода животного (опционально)
    gender: Optional[str] = None       # Пол животного (например, "м" для мальчика и "ж" для девочки
    
class Owner(BaseModel):
    name: str
    surname: str
    email: str
    phone: str
    pets: List[Pet] = []

class Hotel(BaseModel):
    name: str
    phone: str
    hotel_owner_name: str
    hotel_owner_surname: str
    location: str
    conditions: str
    animal_types: List[str]
    price_per_day: float
    photos: List[str] = []
    rating: Optional[float]
