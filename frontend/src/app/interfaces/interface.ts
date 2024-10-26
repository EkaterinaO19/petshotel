export interface Hotel {
    id: number;
    name: string;
    phone: string;
    hotel_owner_name: string;  // This should be used for hotelOwnerName
    hotel_owner_surname: string; // Not used in HotelCard, unless needed
    location: string;
    conditions: string;
    animal_types: string[];     // This should be used for animalTypes
    price_per_day: number;      // This should be used for pricePerDay
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