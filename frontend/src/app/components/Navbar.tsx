import styles from '../styles/Navbar.module.scss'
import React from 'react';
import Link from 'next/link';
import DropdownButton from './DropdownButton';

const Navbar: React.FC = () => {

    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__logo}>
                <Link href="/">
                Pet Hotel
                </Link>
            </div>

            <ul className={styles.menu}>
                <li><Link href="/">Главная</Link></li>
                <li>Зарегистрировать гостиницу</li>
                <li>Связаться с нами</li>
            </ul>
            <DropdownButton />
        </div> 
    )
   
}

export default Navbar;