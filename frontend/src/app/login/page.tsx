"use client"

import React from 'react';
import { Button, Checkbox, Form, Input, Space, message  } from 'antd';
import styles from '@/app/styles/LoginPage.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 

type FieldType = {
    email?: string;
    password?: string;
    remember?: string;
  };

export default function Login() {
    const router = useRouter();

    const onFinish = async (values: FieldType) => {
      try {
        const response = await fetch('http://127.0.0.1:8000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            accept: 'application/json',
          },
          body: new URLSearchParams({
            grant_type: 'password',
            username: values.email || '',
            password: values.password || '',
            scope: '',
            client_id: 'string', // Update with your actual client_id
            client_secret: 'string', // Update with your actual client_secret
          }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          message.success('Вход успешен!');
          router.push('/'); 
        } else {
          message.error(data.message || 'Ошибка при входе');
        }
      } catch (error) {
        message.error('Ошибка соединения с сервером');
      }
    };


    return (
        <>
        <Link href={'/'}>
            <p className={styles.backButton}>Назад</p>
        </Link>
        <main className={styles.container}>
            <h1 className={styles.title}>Вход</h1>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                autoComplete="on"
                onFinish={onFinish} 
            >
                <Form.Item<FieldType>
                label="Эл. почта"
                name="email"
                rules={[{ required: true, message: 'Пожалуйста, введите адрес эл. почты!' }]}
                >
                <Input />
                </Form.Item>

                <Form.Item<FieldType>
                label="Пароль"
                name="password"
                rules={[{ required: true, message: 'Пожалуйста, ведите пароль!' }]}
                >
                <Input.Password />
                </Form.Item>

                <Space>
                <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
                <Checkbox>Запомнить меня</Checkbox>
                </Form.Item>

                <Link href={'login'}>
                <Button type="link" htmlType="button" style={{color:'#022f4f'}}>
                    Зарегистрироваться
                </Button>
                </Link>
                
                </Space>

                <Form.Item label={null}>
                <Button type="primary" htmlType="submit" style={{backgroundColor:'#022f4f'}}>
                    Войти
                </Button>
                </Form.Item>
            </Form>
        </main>
        </>

    );
}