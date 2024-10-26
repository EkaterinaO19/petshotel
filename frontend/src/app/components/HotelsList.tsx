'use client'

import React, { useEffect, useState } from 'react';
import { fetchHotels } from '../utils/api';
import { Hotel } from '../interfaces/interface';
import HotelCard from '../components/HotelCard'


const HotelList:React.FC = () => {
    const [hotels, setHotels] = useState<Hotel[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadHotels = async() => {
            try {
                const data = await fetchHotels();
                setHotels(data)
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
        <div>
        <h1>Hotels</h1>
        <ul>
                {hotels.map((hotel) => (
                    <HotelCard key={hotel.id} {...hotel} />
                ))}
        </ul>
    </div>
    )
}


export default HotelList