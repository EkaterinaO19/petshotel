import React, { useState, useEffect } from 'react';
import styles from '../styles/MainLanding.module.scss';
import petwomanimage from '../assets/good-humored-woman-holds-dog-laughing-pink-background-emotional-sort-haired-girl-grey-hoodie-poses-with-corgi-isolated.png'
import Image from 'next/image';


const MainLanding: React.FC = () => {
    return (
        <div className={styles.container}>
        <div className={styles.textColumn}>
            <h1>В Pet Hotel мы понимаем, как важны ваши любимцы для вас</h1>
            <p>Наша цель — предоставить им комфортные и безопасные условия для проживания, пока вы находитесь вдали.</p>
        </div>
        <div className={styles.imageColumn}>
            <Image 
                src={petwomanimage}
                alt='petwomanimage'
                layout="responsive" // Использует адаптивное масштабирование
                width={944} // Укажите желаемую ширину
                height={693} // Укажите высоту, пропорциональную ширине
                objectFit="contain" // Или "cover" в зависимости от нужного поведения
            />
        </div>    
    </div>
    )
}

export default MainLanding;