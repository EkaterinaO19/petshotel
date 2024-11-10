import axios from 'axios';
import styles from '../../styles/HotelPage.module.scss';
import Link from 'next/link'


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
        <div className={styles.price}>Цена: {hotel.price_per_day} руб./сутки</div>
      </div>

      <div className={styles.photos}>
        {hotel.photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Фото ${index + 1}`} className={styles.photo} />
        ))}
      </div>

      <div className={styles.animalTypes}>
        <h3>Типы животных:</h3>
        <ul>
          {hotel.animal_types.map((animal, index) => (
            <li key={index}>{animal}</li>
          ))}
        </ul>
      </div>

      {/* Booking Button */}
      <div className={styles.bookingButtonContainer}>
        <button className={styles.bookingButton}>Забронировать</button>
      </div>

      {/* Reviews Section */}
      <div className={styles.reviews}>
        <h3>Отзывы:</h3>
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
