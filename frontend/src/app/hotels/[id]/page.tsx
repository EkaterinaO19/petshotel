"use client"

import axios from 'axios';
import styles from '../../styles/HotelPage.module.scss';
import Link from 'next/link';
import noPhotoImg from '@/app/assets/no-photo.png';
import Image from 'next/image';
import {
  Button,
  DatePicker,
  Form,
  Select,
} from 'antd';



interface Hotel {
  id: number;
  name: string;
  location: string;
  price_per_day: number;
  rating: number;
  animal_types: string[];
  photos: string[];
  reviews: { user: string; comment: string; rating: number }[];
}

interface HotelPageProps {
  params: { id: string };
}

const { RangePicker } = DatePicker;


const HotelPage = async ({ params }: HotelPageProps) => {
  const { id } = params;

  let hotel: Hotel | null = null;

  try {
    const hotelResponse = await axios.get(`http://127.0.0.1:8000/hotels/${id}`);
    const reviewsResponse = await axios.get(`http://127.0.0.1:8000/hotels/${id}/reviews`);
    hotel = { ...hotelResponse.data, reviews: reviewsResponse.data };
  } catch (error) {
    console.error('Error fetching hotel data:', error);
  }

  if (!hotel) {
    return <div>Отель не найден</div>;
  }

  return (
    <div className={styles.hotelPage}>
      {/* Back button */}
      <Link href={'/'}>
        <button className={styles.backButton}>Назад</button>
      </Link>
     

      <div className={styles.hotelHeader}>
        <h1>{hotel.name}</h1>
        <p className={styles.location}>{hotel.location}</p>
        <div className={styles.rating}>⭐ {hotel.rating}</div>
        <p className={styles.price}>Цена: {hotel.price_per_day} руб./сутки</p>
      </div>

      <div className={styles.photos}>
        {hotel.photos.length > 0 ? (
              hotel.photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Фото ${index + 1}`} className={styles.photo} />
        ))
        ) : (
          <Image
                 src={noPhotoImg}
                 alt="Placeholder"
                 className={styles.photo}
                 width={100}
                 height={100}
             />
        )}

      </div>

      <div className={styles.formContainer}>
      <Form>
        <Form.Item label="Выберите даты">
          <RangePicker/>
        </Form.Item>

          <Form.Item label="Выберите тип питомца">
            <Select>
            {hotel.animal_types.map((animal, index) => (
            <Select.Option key={index}>{animal}</Select.Option>
            ))}
            </Select>
          </Form.Item>

          <Form.Item label={null}>
          <Button type="primary" htmlType="submit" style={{backgroundColor:'#022f4f'}}>
            Забронировать
          </Button>
        </Form.Item>

      </Form>  
      </div>

      <div className={styles.animalTypes}>
        <h4>Типы принимаемых животных:</h4>
        <ul>
          {hotel.animal_types.map((animal, index) => (
            <li key={index}>{animal}</li>
          ))}
        </ul>
      </div>

      {/* Reviews Section */}
      <div className={styles.reviews}>
        <h4>Отзывы:</h4>
        {hotel.reviews.length > 0 ? (
          hotel.reviews.map((review, index) => (
            <div key={index} className={styles.review}>
              <p><strong>{review.user}</strong> (Рейтинг: {review.rating}⭐)</p>
              <p>{review.comment}</p>
            </div>
          ))
        ) : (
          <p>Нет отзывов для этого отеля.</p>
        )}
      </div>
    </div>
  );
};

export default HotelPage;
