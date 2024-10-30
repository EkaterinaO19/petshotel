'use client'

import styles from '../styles/SearchBar.module.scss'
import React, { useState } from 'react';
import { Input, DatePicker, Button, Select } from 'antd';
import { FiSearch } from 'react-icons/fi';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';


const { RangePicker } = DatePicker;
const { Option } = Select;


const animalOptions = [
    { value: 'cat', label: 'Кошка' },
    { value: 'dog', label: 'Собака' },
    { value: 'hamster', label: 'Хомяк' },
    { value: 'parrot', label: 'Попугай' },
    { value: 'rabbit', label: 'Кролик' },
    { value: 'amphibians', label: 'Земноводные' },
    { value: 'reptiles', label: 'Рептилии' },
    { value: 'others', label: 'Другое' },
];

const SearchBar: React.FC = () => {
    return (
        <div style={{display:'flex', padding:'4vw', alignItems:'center'}}>
        <div className={styles.listItem}>
            <label className={styles.label}>Где</label>
            <Input placeholder="Выберите место" id="location" />
        </div>
        <div className={styles.listItem}>
            <p>Заезд</p>
            <ConfigProvider locale={ruRU}>            
                <DatePicker placeholder="Выберите дату" id="checkin" />
            </ConfigProvider>
        </div>
        <div className={styles.listItem}>
        <p>Выезд</p>
        <ConfigProvider locale={ruRU}>            

            <DatePicker placeholder="Выберите дату" id="checkout" />
        </ConfigProvider>    
        </div>
        <div className={styles.listItem}>
            <p>Животные</p>
            <Select placeholder="Выберите тип животного" id="animal-type" >
                {animalOptions.map((animal) => (
                    <Option key={animal.value} value={animal.value}>{animal.label}</Option>
                ))}
            </Select>
        </div>
        <div className={styles.searchBtn}>
            <Button type="primary" icon={<FiSearch />}>
                Поиск
            </Button>
        </div>
    </div>
)
}

export default SearchBar;