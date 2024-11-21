"use client"

import React from 'react';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
} from 'antd';
import styles from '@/app/styles/RegisterPage.module.scss'




export default function Register() {

    const { Option } = Select;


    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select style={{ width: 70 }}>
            <Option value="8">+7</Option>
          </Select>
        </Form.Item>
      );
    


    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Зарегистрироваться</h1>
            <Form
                name="register"
                initialValues={{ prefix: '8' }}
                style={{ maxWidth: 600 }}
                scrollToFirstError
                >

<Form.Item
                    name="name"
                    label="Имя"
                    rules={[{ required: true, message: 'Пожалуйста, введите имя!', whitespace: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="surname"
                    label="Фамилия"
                    rules={[{ required: true, message: 'Пожалуйста, введите фамилию!', whitespace: true }]}
                >
                    <Input />
                </Form.Item>    

                <Form.Item
                    name="email"
                    label="Эл.почта"
                    rules={[
                    {
                        type: 'email',
                        message: 'Адрес эл. почты введен неверно!',
                    },
                    {
                        required: true,
                        message: 'Пожалуйста, введите адрес эл. почты!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Пароль"
                    rules={[
                    {
                        required: true,
                        message: 'Пожалуйста, введите пароль!',
                    },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Повторите пароль"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                    {
                        required: true,
                        message: 'Пожалуйста, подтвердите пароль!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error('Пароли не совпадают!'));
                        },
                    }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>


                <Form.Item
                    name="phone"
                    label="Номер телефона"
                    rules={[{ required: true, message: 'Пожалуйста, введите номер телефона!' }]}
                >
                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                    {
                        validator: (_, value) =>
                        value ? Promise.resolve() : Promise.reject(new Error('Необходимо дать согласие на обработку персональных данных!')),
                    },
                    ]}
                >
                    <Checkbox>
                    Я даю согласие на обработку <a href="">персональных данных</a>
                    </Checkbox>
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit" style={{backgroundColor:'#022f4f'}}>
                    Зарегистрироваться
                    </Button>
                </Form.Item>
            </Form>
        </main>
    );
}