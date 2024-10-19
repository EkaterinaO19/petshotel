import React, { useState, useEffect } from 'react';
import styles from '../styles/MainLanding.module.scss';
import petwomanimage from '../assets/good-humored-woman-holds-dog-laughing-pink-background-emotional-sort-haired-girl-grey-hoodie-poses-with-corgi-isolated.png'
import Image from 'next/image';


const MainLanding: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.column}>
                <h1>В Pet Hotel мы понимаем, как важны ваши любимцы для вас</h1>
                <p>Наша цель — предоставить им комфортные и безопасные условия для проживания, пока вы находитесь вдали.</p>
            </div>
            <div className={styles.column}>
                <Image 
                    src={petwomanimage}
                    alt='petwomanimage'
                    // height={900}
                    // width={600}
                />
            </div>    
        </div>
    )
}

export default MainLanding;