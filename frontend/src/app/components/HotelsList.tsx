'use client'

import React, { useEffect, useState } from 'react';
import { fetchHotels } from '../utils/api';
import { Hotel } from '../interfaces/interface';
import HotelCard from '../components/HotelCard'
import styles from '../styles/HotelList.module.scss'



const HotelList:React.FC = () => {
    const [hotels, setHotels] = useState<Hotel[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadHotels = async() => {
            try {
                const data = await fetchHotels();

                const transformedHotels = data.map((hotel: Hotel) => ({
                    id: hotel.id,
                    name: hotel.name,
                    hotelOwnerName: hotel.hotel_owner_name, // Map this correctly
                    location: hotel.location,
                    animalTypes: hotel.animal_types, // This should be an array
                    pricePerDay: hotel.price_per_day, // Map price correctly
                    photos: hotel.photos,
                    rating: hotel.rating,
                }));

                setHotels(transformedHotels)
            }
            catch (error) {
                setError('Failed to fetch hotels' + error)
            }
        }
        
        loadHotels()
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className={styles.listContainer}>

        
        <div className={styles.hotelList}>
                {hotels.map((hotel) => (
                                     <HotelCard 
                                     key={hotel.id} 
                                     id={hotel.id}
                                     name={hotel.name} 
                                     hotelOwnerName={hotel.hotelOwnerName} 
                                     location={hotel.location} 
                                     animalTypes={hotel.animalTypes} 
                                     pricePerDay={hotel.pricePerDay} 
                                     photos={hotel.photos} 
                                     rating={hotel.rating} 
                                 />
                ))}
            </div>
    </div>
    )
}


export default HotelList