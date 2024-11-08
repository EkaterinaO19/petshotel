

import axios from 'axios';
import styles from '../../styles/HotelPage.module.scss'


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
  hotel: Hotel;
}

const HotelPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  
  // Получаем данные о конкретном отеле
  let hotel: Hotel | null = null;
  try {
    const response = await axios.get(`http://127.0.0.1:8000/hotels/${id}`);
    hotel = response.data;
  } catch (error) {
    console.error('Error fetching hotel:', error);
  }

  if (!hotel) {
    return <div>Отель не найден</div>;
  }


  const handleBooking = () => {
    console.log('Redirecting to booking page...');
    // Example: router.push(`/booking/${hotel.id}`);
  };

  return (
    <div className={styles.hotelPage}>
      {/* Back button */}
      <button className={styles.backButton}>
        Назад
      </button>

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

      {/* Add the "Забронировать" button */}
      <div className={styles.bookingButtonContainer}>
        <button className={styles.bookingButton}>
          Забронировать
        </button>
      </div>

      {/* Reviews Section */}
      <div className={styles.reviews}>
        <h3>Отзывы:</h3>
        {hotel?.reviews?.length > 0 ? (
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
