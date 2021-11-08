import React from "react";
import { Component } from "react";
import { Form, Input, Button, Checkbox, Col} from 'antd';
import { QuestionCircleOutlined } from "@ant-design/icons";
import 'antd/dist/antd.css';
import './edit_profile.scss'

class FormEditProfile extends Component {
    render() {
        return (
            <Form>
                <div className='edit_header'>
                    <h3>Редагувати профіль </h3>
                </div>
                <div className='edit_chooseRole'>
                    <Button type="primary" className='edit_visitor' ><img src='/static/images/registration/Ellipse.jpg' />Відвідувач</Button>
                    <Button type="primary" className='edit_boss' ><img src='/static/images/registration/Ellipse.jpg' />Керівник</Button>
                </div>
                <Form.Item name="lastName"
                    className="edit-input"
                    label="Прізвище"
                    hasFeedback
                    rules={[{
                        required: true,
                        message: "Введіть прізвище",
                    },
                    {
                        required: false,
                        pattern: /^[^0-9]*$/,
                        message: "Прізвище не може містити цифри",
                    },
                    {
                        required: false,
                        pattern: /^(?=[^-'ʼ\s]).*[^-'ʼ\s]$/,
                        message: "Прізвище повинно починатися і закінчуватися літерою",
                    },
                    {
                        required: false,
                        pattern: /^[^-ЁёЪъЫыЭэ]/,
                        message: "Прізвище не може містити російські букви"
                    },
                    {
                        required: false,
                        pattern: /^[^`~!@₴£№#$%^&*()_+={}\\|/\\:;“"<,>.?๐฿]*$/,
                        message: "Прізвище не може містити спеціальні символи",
                    },
                    {
                        max: 25,
                        message: "Прізвище не може містити більше, ніж 25 символів",
                    }]}>
                    <Input className="edit-box"
                        placeholder="Введіть ваше прізвище" />
                </Form.Item>

                <Form.Item name="firstName"
                    className="edit-input"
                    label="Ім`я"
                    hasFeedback
                    rules={[{
                        required: true,
                        message: "Введіть ім`я",
                    },
                    {
                        required: false,
                        pattern: /^[^0-9]*$/,
                        message: "Ім`я не може містити цифри",
                    },
                    {
                        required: false,
                        pattern: /^(?=[^-'ʼ\s]).*[^-'ʼ\s]$/,
                        message: "Ім`я повинно починатися і закінчуватися літерою",
                    },
                    {
                        required: false,
                        pattern: /^[^-ЁёЪъЫыЭэ]/,
                        message: "Ім`я не може містити російські букви"
                    },
                    {
                        required: false,
                        pattern: /^[^`~!@₴£№#$%^&*()_+={}\\|/\\:;“"<,>.?๐฿]*$/,
                        message: "Ім`я не може містити спеціальні символи",
                    },
                    {
                        max: 25,
                        message: "Ім`я не може містити більше, ніж 25 символів",
                    }]}>
                    <Input className="edit-box"
                        placeholder="Введіть ваше ім`я" />
                </Form.Item>

                <Form.Item name="phone"
                    className="edit-input"
                    label="Телефон"
                    hasFeedback
                    rules={[{
                        required: true,
                        message: 'Введіть номер телефону'
                    },
                    {
                        required: false,
                        pattern: /^[^A-Za-zА-Яа-яІіЇїЄєҐґ]*$/,
                        message: 'Телефон не може містити літери',
                    },
                    {
                        required: true,
                        pattern: /^[^\s]*$/,
                        message: 'Телефон не може містити пробіли',
                    },
                    {
                        required: false,
                        pattern: /^[^-`~!@#$%^&*()_+={}\\|\\:;“’'<,>.?๐฿]*$/,
                        message: 'Телефон не може містити спеціальні символи',
                    },
                    {
                        pattern: /^.{9}$/,
                        message: "Телефон не відповідає вказаному формату",
                    },
                    ]}>
                    <Input addonBefore="+380" className="edit-box"
                        placeholder="__________"/>
                </Form.Item>
                <Form.Item name="email"
                    className="edit-input"
                    label="Email"
                    hasFeedback
                    rules={[{
                        required: true,
                        message: 'Введіть email'
                    },
                    {
                        type: 'email',
                        message: 'Некоректний формат email',
                    }]}  >
                    <Input className="edit-box"
                        disabled/>
                </Form.Item>

                <Form.Item name="photo"
                    className="edit-input"
                    
                    label={<QuestionCircleOutlined />}
                >
                </Form.Item>

                <Checkbox.Group>
                    <Col className='rowStyle'>
                        <Checkbox value="online"><span className='advancedSearchSpan'>Змінити пароль</span></Checkbox>
                    </Col>
                </Checkbox.Group>
                <Form.Item
                className="edit-input"
                    name="password"
                    label="Пароль"
                    rules={[
                        {
                            required: true,
                            message: 'Введіть пароль',
                        },
                        {
                            pattern: /^\S{8,20}$/,
                            message: 'Пароль не може бути коротшим, ніж 8 та довшим, ніж 20 символів'
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                className="edit-input"
                    name="confirm"
                    label="Підтвердження паролю"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Підтвердіть пароль!',
                        },
]}                >
                    <Input.Password />
                </Form.Item>
                <Form.Item className='edit_submitBtn'>
                    <Button type="primary" htmlType="submit">
                        Зберегти зміни
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}


export default FormEditProfile;