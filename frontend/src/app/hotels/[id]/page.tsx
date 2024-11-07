import axios from 'axios';

interface Hotel {
  id: number;
  name: string;
  location: string;
  price_per_day: number;
  rating: number;
  animal_types: string[];
  photos: string[];
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

  return (
    <div>
      <h1>{hotel.name}</h1>
      <p>{hotel.location}</p>
      <p>{hotel.price_per_day} руб./сутки</p>
      <p>{hotel.rating} ⭐</p>
      <div>
        {hotel.photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Фото ${index + 1}`} />
        ))}
      </div>
      {/* Здесь можно отобразить другие данные отеля */}
    </div>
  );
};

export default HotelPage;
