import '../styles/Navbar.module.scss'
import React, { useState } from 'react';
import Link from 'next/link';
import DropdownButton from './DropdownButton';

const Navbar: React.FC = () => {

    return(
        <nav className="navbar">
            <div className="navbar__logo">
                <Link href="/">
                Pet Hotel
                </Link>
            </div>

            <ul>
                <li>Главная</li>
                <li>Поиск гостиниц</li>
                <li>Зарегистрировать гостиницу</li>
                <li>Связаться с нами</li>
            </ul>
            <DropdownButton />
        </nav> 
    )
   
}

export default Navbar;