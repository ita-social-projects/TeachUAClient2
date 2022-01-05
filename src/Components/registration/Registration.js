import React from "react";
import PropTypes from 'prop-types';
//import ReactDOM from "react-dom";

import { Form, Input, Button, Modal,message } from 'antd';
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import 'antd/dist/antd.css';
import '../registration/registartion.modules.scss'
import { addUser } from "../../Services/registration";


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
        showModal: false,
        id:0,
    email:'',
    firstName:'',
    lastName:'',
    phone:0,
    password:'',
    roleName:'ROLE_MANAGER',
    verificationCode:'',
    urlLogo:'',
    status:'',
    }
    handleOk = () => {
        this.setState({ showModal: !this.state.showModal });
    };
    handleEmail= (event) =>{
        this.setState({email:event.target.value})
    }
    handleFirstName= (event) =>{
        this.setState({firstName:event.target.value})
    }
    handleLastName= (event) =>{
        this.setState({lastName:event.target.value})
    }
    handlePhone= (event) =>{
        this.setState({phone:0+event.target.value})
        
    }
    handlePassword= (event) =>{
        this.setState({password:event.target.value})
    }
  


    onFinish = () => {
        addUser(this.state.email,
            this.state.firstName,
            this.state.lastName,
            this.state.phone,
            this.state.password,
            this.state.roleName).then((response) => {
                console.log(response.status);
               
                    message.success({
                        content: 'Ви успішно зареєструвалися! \n' +
                            'Вам на пошту відправлено лист з лінком для підтвердження реєстрації',
                        duration: 5,
                        className: "custom-class-confirmation",
                    })
                }
            ).catch(()=>{
                message.error("Вказаний email вже зареєстрований на сайті");
            });
            
            this.handleOk();
        console.log(this.state);
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
                            onChange={this.handleFirstName}
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
                            onChange={this.handleLastName}
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
                            onChange={this.handlePhone}
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
                            onChange={this.handleEmail}
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
                            onChange={this.handlePassword}
                            rules={[
                                {
                                    required: true,
                                    message: 'Введіть пароль',
                                },
                                {
                                    pattern: /^\S{8,20}$/,
                                    message: 'Пароль не може бути коротшим, ніж 8 та довшим, ніж 20 символів'
                                },{
                                    pattern: /[a-z]/,
                                    message: "Пароль повинен містити хоча б одну маленьку літеру"
                                }, {
                                    pattern: /[A-Z]/,
                                    message: "Пароль повинен містити хоча б одну велику літеру"
                                }, {
                                    pattern: /[0-9]/,
                                    message: "Пароль повинен містити хоча б одну цифру"
                                }, {
                                    pattern: /[~`!@#$%^&()_=+{}\\[\\\]\\/|:;,"<>?]/,
                                    message: "Пароль повинен містити хоча б один спец. символ"
                                }, {
                                    pattern: /^[^А-Яа-яЇїІіЄєҐґЁёЪъЫыЭэ]+$/,
                                    message: 'Пароль не може містити українські та російські літери'
                                }
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