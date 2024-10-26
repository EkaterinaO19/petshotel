export interface Hotel {
    id: number;
    name: string;
    phone: string;
    hotel_owner_name: string;
    hotel_owner_surname: string;
    location: string;
    conditions: string;
    animal_types: string[];
    price_per_day: number;
    photos: string[];
    rating: number;
}

export interface HotelCardMiniProps {
    name: string;
    hotelOwnerName: string;
    location: string;
    animalTypes: string[];
    pricePerDay: number;
    photos: string[];
    rating: number;
}