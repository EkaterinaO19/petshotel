"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu } from "react-icons/fi";
import styles from '../styles/DropdownButton.module.scss'


const DropdownButton: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const dropdown = document.querySelector('.dropdown');
    if (dropdown && !dropdown.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdown__button} onClick={toggleDropdown}>
      <FiMenu size="24" color="#FFFFFF"/>
      </div>
      {isDropdownOpen && (
        <div className={styles.dropdown__menu}>
            <Link href="/register">Зарегистрироваться</Link>
            <Link href="/login">Вход</Link>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;