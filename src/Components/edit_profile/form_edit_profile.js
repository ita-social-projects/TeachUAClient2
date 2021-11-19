import React from "react";
import { Component } from "react";
import { Form, Input, Button, Checkbox, Col } from 'antd';
import { QuestionCircleOutlined, UploadOutlined, UserOutlined } from "@ant-design/icons";
import 'antd/dist/antd.css';
import './edit_profile.scss'

class FormEditProfile extends Component {
    state = {
        changePassword: false,
    }


    handleChangePassword = () => {
        this.setState({ changePassword: !this.state.changePassword });
    }
    render() {
        return (
            <Form >
                <div className='edit-header'>
                    <h3>Редагувати профіль </h3>
                </div>
                <div className='edit-chooseRole'>
                    <Button type="primary" className='edit-visitor'> <UserOutlined className='logoEditProfile' />Відвідувач</Button>
                    <Button type="primary" className='edit-boss' ><UserOutlined className='logoEditProfile' />Керівник</Button>
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
                    <Input allowClear className="edit-box"
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
                    <Input allowClear className="edit-box"
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
                    <Input allowClear addonBefore="+38" className="edit-box"
                        placeholder="__________" />
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
                    }]}>
                    <Input className="edit-box"
                        disabled />
                </Form.Item>

                <Form.Item
                    name="photo"
                    className="edit-input"
                > <span className='change-photo'>Фото&nbsp;< QuestionCircleOutlined />:</span>
                    <span className='upload-photo'>< UploadOutlined />&nbsp; Завантажити фото</span>
                </Form.Item>

                <Checkbox.Group>
                    <Col className='row-style'>
                        <Checkbox onClick={this.handleChangePassword} checked={this.state.c}><span className='advancedSearchSpan'>Змінити пароль</span></Checkbox>
                    </Col>
                </Checkbox.Group>
                {this.state.changePassword &&
                    <div>
                        <Form.Item
                            className="edit-input"
                            name="activePassword"
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
                            <Input.Password placeholder='Введіть діючий пароль' />
                        </Form.Item>

                        <Form.Item
                            className="edit-input"
                            name="newPassword"
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
                            <Input.Password placeholder='Введіть новий пароль' />
                        </Form.Item>

                        <Form.Item
                            className="edit-input"
                            name="confirmNewPassword"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Підтвердіть пароль!',
                                },
                            ]}                >
                            <Input.Password placeholder='Підтвердіть новий пароль' />
                        </Form.Item>
                    </div>
                }

                <Form.Item className='edit-submitBtn'>
                    <Button type="primary" htmlType="submit">
                        Зберегти зміни
                    </Button>
                </Form.Item>

            </Form>
        )
    }
}


export default FormEditProfile;