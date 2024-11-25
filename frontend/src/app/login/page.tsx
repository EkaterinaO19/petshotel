"use client"

import React from 'react';
import { Button, Checkbox, Form, Input, Space  } from 'antd';
import styles from '@/app/styles/LoginPage.module.scss';
import Link from 'next/link';


type FieldType = {
    email?: string;
    password?: string;
    remember?: string;
  };

export default function Login() {
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
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="on"
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