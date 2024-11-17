'use client'

import React, { useEffect, useState } from 'react';
import { fetchHotels } from '../utils/api';
import { Hotel } from '../interfaces/interface';
import HotelCard from '../components/HotelCard';
import { Pagination } from 'antd';
import styles from '../styles/HotelList.module.scss';



const HotelList:React.FC = () => {
    const [hotels, setHotels] = useState<Hotel[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1); 
    const [pageSize, setPageSize] = useState(10);
    const [total, setTotal] = useState(0);     


    useEffect(() => {
        const loadHotels = async() => {
            try {
                const data = await fetchHotels(currentPage, pageSize);

                const transformedHotels = data.hotels.map((hotel: Hotel) => ({
                    id: hotel.id,
                    name: hotel.name,
                    hotelOwnerName: hotel.hotel_owner_name, 
                    location: hotel.location,
                    animalTypes: hotel.animal_types, 
                    pricePerDay: hotel.price_per_day, 
                    photos: hotel.photos,
                    rating: hotel.rating,
                }));

                setHotels(transformedHotels)
                setTotal(data.total);
            }
            catch (error) {
                setError('Failed to fetch hotels' + error)
            }
        }
        
        loadHotels()
    }, [currentPage, pageSize]);

    const handlePageChange = (page: number, pageSize?: number) => {
        setCurrentPage(page);
        if (pageSize) setPageSize(pageSize); 
    };


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
            <Pagination
                align="center"
                current={currentPage} // Controlled current page
                pageSize={pageSize}    // Controlled page size
                total={total}          // Total number of hotels
                onChange={handlePageChange} // Handle page change
            />
        </div>
    )
}


export default HotelList