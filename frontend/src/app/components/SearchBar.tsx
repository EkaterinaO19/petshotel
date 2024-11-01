'use client'

import styles from '../styles/SearchBar.module.scss'
import React, { useState } from 'react';
import { Input, DatePicker, Button, Select } from 'antd';
import { FiSearch } from 'react-icons/fi';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';
import { Form } from "antd";

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


type LayoutType = Parameters<typeof Form>[0]['layout'];


const SearchBar: React.FC = () => {
    const [form] = Form.useForm();


    return (
        <Form layout={"inline"} style={{display:'flex', padding:'2vw', alignItems:'center'}}>
            <Form.Item label="Место">            
                <Input placeholder="Выберите место" id="location" />
            </Form.Item>  
            <Form.Item label="Заезд">            
            <ConfigProvider locale={ruRU}>            
                <DatePicker placeholder="Выберите дату" id="checkin" />
            </ConfigProvider>
            </Form.Item>  
            <Form.Item label="Выезд">            
            <ConfigProvider locale={ruRU}>            
                <DatePicker placeholder="Выберите дату" id="checkout" />
            </ConfigProvider>
            </Form.Item>  
            <Form.Item label="Тип Животного">            
            <Select placeholder="Выберите тип животного" id="animal-type" >
                {animalOptions.map((animal) => (
                    <Option key={animal.value} value={animal.value}>{animal.label}</Option>
                ))}
            </Select>
            </Form.Item>  
            <Form.Item>  
            <Button type="primary" icon={<FiSearch />}>
                Поиск
            </Button>          
            </Form.Item>  
        </Form>
        
)
}

export default SearchBar;