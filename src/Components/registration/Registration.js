import React from "react";
import PropTypes from 'prop-types';
//import ReactDOM from "react-dom";

import { Form, Input, Button, Modal } from 'antd';
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import 'antd/dist/antd.css';
import '../registration/registartion.modules.scss'


const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 12,
    },

};








class NewRegistration extends React.Component {
    state = {
        showModal: false
    }
    handleOk = () => {
        this.setState({ showModal: !this.state.showModal });
    };


    onFinish = (values) => {
        console.log(values);
    };


    render() {

       
        return (
            <>
                <a onClick={() => { this.handleOk(); }} >Реєстрація</a>
                <Modal
                    width={600}
                    className='registration__modal'
                    visible={this.state.showModal}
                    onCancel={() => { this.setState({ showModal: !this.state.showModal }) }}
                    footer={null}

                >
                    <Form {...layout} name="nest-messages" onFinish={this.onFinish}>

                        <div className='registration__header'>
                            <h3>Реєстрація </h3>
                        </div>
                        <div className='registration__chooseRole'>
                            <Button type="primary" className='registration__boss' ><img src='/static/images/registration/Ellipse.jpg' />Керівник</Button>
                        </div>
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
                                // message: 'Введіть прізвище',
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
                            }]}>
                            <Input className="registration-box"
                                placeholder="Введіть ваш емейл"
                                suffix={<MailOutlined className="mail-icon" />} />
                        </Form.Item>
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
                            label="Підтвердження  паролю"
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
                                Зареєструватися
                            </Button>
                        </Form.Item>
                    </Form>

                </Modal>
            </>
            /*,
            this.root*/
        );
    }
}

NewRegistration.propTypes = {
    onClose: PropTypes.func,
    isRegistaration: PropTypes.bool,
    SetRegistaration: PropTypes.func
};


export default NewRegistration;