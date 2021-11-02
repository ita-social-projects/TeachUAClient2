import React from 'react';
import {Form, Input, Modal} from 'antd';
import {MailOutlined} from "@ant-design/icons";
import "./login.scss";
import RestorePasswordModal from "./restorePasswordModal";



class Login extends React.Component  { 
    state = {
        showModal: false
       }
     
       handleModal = () => {
         this.setState({showModal: !this.state.showModal});
       } 
          
       

    render() {  
        
    return (
        <>
        <button onClick={this.handleModal}> Show modal </button>      
        <Modal 
        visible={this.state.showModal} 
        handleModal={this.handleModal}
        footer={null} 
        onCancel= {() => this.handleModal(false)} 
        centered> 
        <div className="login-body">
            <div className="login-header">
                <div className="login-header-text">
                    Вхід
                </div>                
            </div>
            <div>
                <a href="#">
                    <img title="" src="./static/images/login/login-google.png" alt=""/>
                </a>
            </div>
            <div className="label-or">
                <span>або</span>
            </div>
            <div className="login-field">
                 <Form.Item name="email"
                           className="login-input"
                           label="Емейл"
                           hasFeedback
                           rules={[{
                               required: true,                               
                               type: 'email'
                           }]}>
                    <Input className="login-box"
                           placeholder="Введіть ваш емейл"
                           suffix={<MailOutlined classname="mail-icon"/>}/>
                </Form.Item>
            
                <Form.Item name="password"
                            className="login-input"
                            label="Пароль"
                            hasFeedback
                            rules={[{
                               required: true,
                               
                           }]}>
                    <Input.Password className="login-box"
                                    placeholder="Введіть ваш пароль"/>
                </Form.Item>           
            </div>
            <div className="login-button-box">
            <button className="login-button"
                            htmlType="submit">
                        Увійти
                    </button>
            </div> 
            <div className="reset-button">
                <RestorePasswordModal/>
            </div>
        </div>
        </Modal> 
        </>
    )
    }
}

export default Login;