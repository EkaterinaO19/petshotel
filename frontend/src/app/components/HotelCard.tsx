import React, {useState} from 'react';
import { HotelCardMiniProps } from '../interfaces/interface';
import styles from '../styles/HotelCard.module.scss'
import Image from 'next/image';
import { FiChevronRight, FiChevronLeft, FiStar } from "react-icons/fi";
import noPhotoImg from '../assets/no-photo.png'

const HotelCard: React.FC<HotelCardMiniProps> = ({
    name,
    hotelOwnerName,
    location,
    animalTypes,
    pricePerDay,
    photos,
    rating,
}) => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === photos.length - 1 ? 0 : prev + 1))
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? photos.length - 1 : prev - 1))
    }

    return (
        <div className={styles.hotelCard}>
             <div className={styles.sliderContainer}>
                <div className={styles.sliderWrapper}>
                    {photos.length > 0 ? (
                        photos.map((photo, index) => (
                        <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
                        {index === currentSlide && (
                            <img src={photo} alt={`Photo ${index}`} className={styles.hotelImage} />
                        )}
                        </div>
                    ))
                    ) : (
                    <div className={styles.slideActive}>
                         <Image
                                src={noPhotoImg}
                                alt="Placeholder"
                                className={styles.hotelImage}
                                width={100}
                                height={100}
                            />
                    </div>
                    )}
                </div>
                {/* Navigation Buttons */}
                {photos.length > 1 && ( 
                    <div className={styles.navigationBtns}>
                        <div onClick={prevSlide} className="prev"><FiChevronLeft /></div>
                        <div onClick={nextSlide} className="next"><FiChevronRight /></div>
                    </div>
                )}                
                </div>


            <div className={styles.hotelInfo}>
                <h4>{name}</h4>
                <p><strong>Владелец:</strong> {hotelOwnerName}</p>
                <p><strong>Местоположение:</strong> {location}</p>
                <p><strong>Животные:</strong> {animalTypes}</p>
                <p><strong>Цена/сут.:</strong> руб.{pricePerDay}</p>
                <p><strong>Рейтинг:</strong> {rating} <FiStar /></p>
            </div>
            
        </div>
    )
}

export default HotelCard;