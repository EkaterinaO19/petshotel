'use client'

import React, { useState } from 'react';
import axios from 'axios';
import styles from '@/app/styles/CreateHotelPage.module.scss';


const CreateHotelPage = () => {
    const [formData, setFormData] = useState({
        id: 0,
        name: '',
        phone: '',
        hotel_owner_name: '',
        hotel_owner_surname: '',
        location: '',
        conditions: '',
        animal_types: '',
        price_per_day: 0,
        photos: [] as File[],
        rating: 0,
    })

    const [message, setMessage] = useState('');


    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value,})
    }


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
          setFormData({
            ...formData,
            photos: Array.from(e.target.files),  
          });
        }
      };


      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
            const data = {
                id: formData.id,
                name: formData.name,
                phone: formData.phone,
                hotel_owner_name: formData.hotel_owner_name,
                hotel_owner_surname: formData.hotel_owner_surname,
                location: formData.location,
                conditions: formData.conditions,
                animal_types: formData.animal_types.split(',').map(type => type.trim()),  // Convert string to array
                price_per_day: formData.price_per_day,
                photos: formData.photos.map(photo => photo.name),  // Map files to their names (you may need to adapt this to your backend logic)
                rating: formData.rating,  // Include rating
              };
        
    
          const response = await axios.post('http://127.0.0.1:8000/register/hotel', data);
    
          setMessage('Успешно зарегистрировано!');
        } catch (error) {
          console.error('Error registering hotel:', error);
          setMessage('Ошибка регистрации. Пожалуйста, попробуйте еще раз.');
        }
      };
    


    return (
        <main>
            <div className={styles.registerHotelPage}>
            <h1>Регистрация Гостиницы</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label>
                Назвние Гостиницы:
                <input type="text" name="name" value={formData.name} onChange={handleFormChange} required />
                </label>
                <label>
                Номер телефона:
                <input type="text" name="phone" value={formData.phone} onChange={handleFormChange} required />
                </label>
                <label>
                Имя Владельца:
                <input type="text" name="hotel_owner_name" value={formData.hotel_owner_name} onChange={handleFormChange} required />
                </label>
                <label>
                Фамилия Владельца:
                <input type="text" name="hotel_owner_surname" value={formData.hotel_owner_surname} onChange={handleFormChange} required />
                </label>
                <label>
                Расположение:
                <input type="text" name="location" value={formData.location} onChange={handleFormChange} required />
                </label>
                <label>
                Условия:
                <textarea name="conditions" value={formData.conditions} onChange={handleFormChange} placeholder="напр: квартира, частный дом, уличные вальеры..." required />
                </label>
                <label>
                Виды животных (через запятую):
                <input type="text" name="animal_types" value={formData.animal_types} onChange={handleFormChange} placeholder="напр: собаки, кошки, грызуны..."
                 required />
                </label>
                <label>
                Стоимость/сут.:
                <input type="number" name="price_per_day" value={formData.price_per_day} onChange={handleFormChange} required />
                </label>
                <label>
                Фото:
                <input type="file" name="photos" onChange={handleFileChange} accept="image/*"  />
                </label>
                <button type="submit">Зарегистрировать</button>
            </form>
            {message && <p>{message}</p>}
            </div>
        </main>
    );
}


export default CreateHotelPage;

