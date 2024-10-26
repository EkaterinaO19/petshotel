import React from 'react';
import { HotelCardMiniProps } from '../interfaces/interface';
import styles from '../styles/HotelCard.module.scss'


const HotelCard: React.FC<HotelCardMiniProps> = ({
    name,
    hotelOwnerName,
    location,
    animalTypes,
    pricePerDay,
    photos,
    rating,
}) => {
    return (
        <div className={styles.hotelCard}>
            <img src={photos[0]} alt={`${name} photo`} className={styles.hotelImage} />
            <h2>{name}</h2>
            <p><strong>Owner:</strong> {hotelOwnerName}</p>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Animal Types:</strong> {animalTypes}</p>
            <p><strong>Price per Day:</strong> ${pricePerDay}</p>
            <p><strong>Rating:</strong> {rating} ★</p>
        </div>
    )
}

export default HotelCard;