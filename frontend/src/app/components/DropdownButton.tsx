"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';


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
    <div className="dropdown">
      <button className="dropdown__button" onClick={toggleDropdown}>
        AV
      </button>
      {isDropdownOpen && (
        <ul className="dropdown__menu">
          <Link href="/register">Зарегистрироваться</Link>
          <Link href="/login">Вход</Link>
        </ul>
      )}
    </div>
  );
};

export default DropdownButton;