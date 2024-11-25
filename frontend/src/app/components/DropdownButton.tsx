"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FiMenu } from "react-icons/fi";
import styles from '../styles/DropdownButton.module.scss'


const DropdownButton: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
    <div className={styles.dropdown} ref={dropdownRef}>
      <div className={styles.dropdown__button} onClick={toggleDropdown}>
      <FiMenu size="24" color="#FFFFFF"/>
      </div>
      {isDropdownOpen && (
        <ul className={styles.dropdown__menu}>
            <li><Link href="register">Зарегистрироваться</Link></li>
            <li><Link href="login">Вход</Link></li>
        </ul>
      )}
    </div>
  );
};

export default DropdownButton;