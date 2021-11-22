import React from "react";
import {Form, Input} from 'antd';
import "./addCenter_contacts.scss";
import contacts from "./Contact.json";


class AddCenter_contacts extends React.Component  {

    checkPrefixphone(name){
        switch(name){
            case "Телефон":
                return "+380";
            default:
                return undefined;
        }
    }
    checkPlaceholder(name){
        switch(name){
            case "Телефон":
                return "__________";
            case "Facebook": 
            case"WhatsApp":
            case "Пошта":
            case "Skype":
            case "Site":
                return "Заповніть поле";
            default:
                return undefined; 
        }
    }
    checkСontacts = (contacts) => {
        switch (contacts.name) {
            case "Телефон":
                return [{
                    required: true,
                    message: "Введіть номер телефону"
                },
                    {
                    required: false,
                    pattern: /^[^-`~!@#$%^&*()/_+={}\]|\\:;“"’'<,>.?๐฿]*$/,
                    message: "Телефон не може містити спеціальні символи"
                },
                    {
                    required: false,
                    pattern: /^[^\s]*$/,
                    message: "Телефон не може містити пробільні символи"
                    },
                    {
                    required: false,
                    pattern: /^.{9}$/,
                    message: "Телефон не відповідає вказаному формату"
                    },
                    {
                    required: false,
                    pattern: /^[^A-Za-zА-Яа-яІіЇїЄєҐґ]*$/,
                    message: "Телефон не може містити літери"    
                    }
                ]
            case "Пошта":
                return [{
                    required: false,
                    type: "email",
                    message: "Некоректний формат email"
                }]
        }
    }

    render() {
        return (
            <div className="contacts-field">
                    <Form>        
                    <Form.Item
                    label="Контакти"
                    name="contacts"
                    className="contacts">                
                    {contacts.map(contact =>
                        <Form.Item
                            className="contacts-formItem"
                            name={contact.name}
                            key={contact.id}
                            rules={
                                this.checkСontacts(contact)
                            }
                            hasFeedback
                        >
                            <Input 
                                className="contacts-input"
                                name={contact.name}
                                prefix={ this.checkPrefixphone(contact.name)}
                                placeholder={this.checkPlaceholder(contact.name)}
                                suffix={
                                    <div ><img 
                                    src={contact.urlLogo} 
                                    alt={contact.alt} 
                                    className="contacts-icon"/></div>}
                                                        
                            />
                        </Form.Item>
                    )}
                </Form.Item>
                </Form >
            </div>
        )
    }
}


export default AddCenter_contacts;