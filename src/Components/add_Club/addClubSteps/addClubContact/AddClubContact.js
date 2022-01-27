import React from "react";
import './addClubContact.scss'
import { Form, Modal, Switch, Tooltip, Input, Button } from 'antd';
import InfoCircleOutlined from "@ant-design/icons/lib/icons/InfoCircleOutlined";
import AddClubContactLocation from "./AddClubContactLocation";
import contacts from '../../data/Contact.json'


class AddClubContact extends React.Component {
    state = {
        showModallocation: false,
        isOnline:false
   
    }
    handleOklocation = () => {
        this.setState({ showModallocation: !this.state.showModallocation });
    };
    checked = () =>{
        this.setState({ isOnline: !this.state.isOnline});
    }

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
            default:
                return undefined;
        }
    }
    checkСontacts = (contacts) => {
        switch (contacts.name) {
            case "Телефон":
                return [{
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
            <Form>
                <div className='google__location'>
                    Локації
                </div>
                <a onClick={() => { this.handleOklocation(); }}>Додати Локацію</a>
                <Modal
                    width={800}
                    visible={this.state.showModallocation}
                    onCancel={() => { this.setState({ showModallocation: !this.state.showModallocation }) }}
                    footer={null}>
                    <AddClubContactLocation handlelocationShowModal={this.handleOklocation} />
                </Modal>
                <div className="add-club-inline">
                    <Form.Item name="isOnline"
                        className="add-club-row"
                        label="Доступний онлайн?"
                       onClick={this.checked}
                    >
                        <Switch
                            checkedChildren="Так"
                            unCheckedChildren="Ні"
                         
                        />
                    </Form.Item>
                    <Button 
                    onClick={()=>{console.log(this.state)}}>
                        state
                    </Button>
                    <Tooltip title="Якщо не додано жодної локації буде автоматично онлайн">
                        <InfoCircleOutlined className="info-icon" />
                    </Tooltip>
                </div>
                <Form.Item
                    label="Контакти"
                    className="add-club-row contact__formSocialnetwork"
                    name="contacts"
                >
                    {contacts.map(contact =>
                        <Form.Item
                            className='contact__socialItems'
                            name={contact.name}
                            key={contact.id}
                            style={{background: "#D9D9D9"}}
                            rules={
                                this.checkСontacts(contact)
                            }
                            hasFeedback
                        >
                            <Input className="add-club-input"
                                name={contact.name}
                                prefix={ this.checkPrefixphone(contact.name)}
                                placeholder={this.checkPlaceholder(contact.name)}
                                suffix={
                                    <div className="input__icon"><img src={contact.urlLogo} alt={contact.alt}/></div>
                                    /*<MaskIcon maskColor="#D9D9D9" iconUrl={contact.urlLogo} />*/}
                            />

                        </Form.Item>
                    )}
               
                </Form.Item>

            </Form>
        )
    }
}
AddClubContact.PropTypes = {

}

export default AddClubContact