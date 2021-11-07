import React from "react";
import { Component } from 'react';
import { Form, Input, Button, Modal, Checkbox, Col, } from 'antd';
import { PhoneOutlined, MailOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import 'antd/dist/antd.css';
import './edit_my_profile.scss'

class EditProfile extends Component {
    state = {
        showModal: false
    }
    handleOk = () => {
        this.setState({ showModal: !this.state.showModal });
    };
    render() {
        return (
            <div>
                <a onClick={() => { this.handleOk(); }} >Редагувати профіль</a>
                <Modal
                    width={880}
                    className='registration__modal'
                    visible={this.state.showModal}
                    onCancel={() => { this.setState({ showModal: !this.state.showModal }) }}
                    footer={null} >

                    <Form >

                        <div className='registration__header'>
                            <h3>Редагувати профіль </h3>
                        </div>
                        <div className='edit_chooseRole'>
                        <Button type="primary" className='edit_visitor' ><img src='/static/images/registration/Ellipse.jpg' />Відвідувач</Button>
                            <Button type="primary" className='registration__boss' ><img src='/static/images/registration/Ellipse.jpg' />Керівник</Button>
                        </div>
                            <Form.Item name="lastName"
                            className="registration-input"
                            label="Прізвище"
                            hasFeedback
                            rules={[{
                                required: true,
                                message: 'Введіть прізвище',
                            },
                            {
                                required: false,
                                pattern: /^[^0-9]*$/,
                                message: 'Прізвище не може містити цифри',
                            },
                            {
                                required: false,
                                pattern: /^[^-ЁёЪъЫыЭэ]/,
                                message: 'Прізвище не може містити російські букви'
                            },
                            {
                                required: false,
                                pattern: /^(?=[^-'ʼ\s]).*[^-'ʼ\s]$/,
                                message: 'Прізвище повинно починатися і закінчуватися літерою',
                            },
                            {
                                required: false,
                                pattern: /^[^`~!@₴£№#$%^&*()_+={}\\|/\\:;“"<,>.?๐฿]*$/,
                                message: 'Прізвище не може містити спеціальні символи',
                            },
                            {
                                max: 25,
                                message: 'Прізвище не може містити більше, ніж 25 символів',
                            }]}>
                            <Input className="registration-box"
                                placeholder="Введіть ваше прізвище" />
                        </Form.Item>

                        <Form.Item name="firstName"
                            className="registration-input"
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
                            <Input className="registration-box"
                                placeholder="Введіть ваше ім`я" />
                        </Form.Item>

                        <Form.Item name="phone"
                            className="registration-input"
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
                            <Input className="registration-box"
                                placeholder="__________"
                                prefix='+380'
                                suffix={<PhoneOutlined className="phone-icon" />} />
                        </Form.Item>
                        <Form.Item name="email"
                            className="registration-input"
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
                            <Input className="registration-box"
                                disabled
                                suffix={<MailOutlined className="mail-icon" />} />
                        </Form.Item>

                        <Form.Item name="photo"
                            className="add_photo"
                            label= { <QuestionCircleOutlined />}
                          >                           
                        </Form.Item>

                        <Checkbox.Group>
                                    <Col className='rowStyle'>
                                        <Checkbox value="online"><span className='advancedSearchSpan'>Змінити пароль</span></Checkbox>
                                    </Col>
                                </Checkbox.Group>
                        <Form.Item
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
                            name="confirm"
                            label="Підтвердження паролю"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Підтвердіть пароль!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('Значення поля ‘Підтвердити пароль’ має бути еквівалентним значенню поля ‘Пароль’'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item className='registration__submitBtn'>
                            <Button type="primary" htmlType="submit">
                                Зберегти зміни
                            </Button>
                        </Form.Item>
                    </Form>

                </Modal>
            </div>
        )
    }
}

export default EditProfile;