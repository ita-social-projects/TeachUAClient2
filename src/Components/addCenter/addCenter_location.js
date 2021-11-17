import React from 'react';
import {Modal, Button, Form, Input, Tooltip, Select} from 'antd';
import {Content} from "antd/es/layout/layout";
import { PlusOutlined } from "@ant-design/icons";
import InfoCircleOutlined from "@ant-design/icons/lib/icons/InfoCircleOutlined";
import cities from "./Cities.json"
import "./addCenter_location.scss"

const {Option} = Select;

class AddCenter_location extends React.Component {
    state = {
        showModal: false
       }
     
       handleModal = () => {
         this.setState({showModal: !this.state.showModal});
       }    


       render() {
        return (
            <div>
                <span className="addCenter-location">
                    <Button 
                    className="add-location-btn" 
                    htmlType="submit" 
                    onClick={this.handleModal}>
                        <PlusOutlined/>Додати локацію
                    </Button>
                </span>
                
                <Modal 
                className="add-location-modal"
                width={650}
                visible={this.state.showModal} 
                handleModal={this.handleModal}
                footer={null} 
                onCancel= {() => this.handleModal(false)} 
                centered>
                    <Content className="add-location-container">
                <div className="add-location-header">
                    Додати локацію
                </div>
                <div className="add-location-content">
                    <Form
                        name="add_location"
                        requiredMark={false}
                        className="add-location-form"
                    >
                        <Form.Item name="name_location"
                                   className="location-formItem"
                                   label="Назва"
                                   hasFeedback
                                   rules={[
                                       {
                                           required: true,
                                           pattern: /^(?!\s)([\wА-ЩЬЮЯҐЄІЇа-щьюяґєії !"#$%&'()*+,\-.:;<=>?@[\]^_`{}~]){5,100}$/,
                                           message: "Некоректна назва локації",
                                       }]}
                        >
                            <Input className="location-input"
                                   suffix={
                                       <Tooltip placement="bottomRight"
                                                title="Це поле може містити українські та англійські символи довжиною від 5-100. також цифри і спец.символи (!#$%&'()*+,-./:;<=>?@[]^_`{}~)">
                                           <InfoCircleOutlined className="info-icon" />
                                       </Tooltip>
                                   }
                                   placeholder="Назва локації" />
                        </Form.Item>
                        <div className="conteiner-select">
                            <Form.Item name="cityName"
                                       className="location-formItem-selector"
                                       label="Місто"
                                       hasFeedback
                                       rules={[{
                                           required: true,
                                           message: "Це поле є обов'язковим"
                                       }]}>
                                <Select
                                    className="location-selector"
                                    placeholder="Виберіть місто">
                                    {cities.map(city => <Option 
                                        value={city.name} key={city.id}>{city.name}</Option>)}
                                </Select>
                            </Form.Item>
                            <Form.Item name="districtName"
                                       className="location-formItem-selector"
                                       label="Район міста"
                                       hasFeedback
                                >
                                <Select
                                    className="add-club-select"
                                    placeholder="Виберіть район"
                                    optionFilterProp="children">
                                    {cities.map(city => <Option
                                        value={city.name} key={city.id}>{city.name}</Option>)}
                                </Select>
                            </Form.Item>
                            <Form.Item name="stationName"
                                       className="location-formItem-selector"
                                       label="Метро/Місцевість"
                                       hasFeedback
                                >
                                <Select
                                    className="add-club-select"
                                    placeholder="Виберіть місцевість"
                                    optionFilterProp="children">
                                    {cities.map(city => <Option
                                        value={city.name} key={city.id}>{city.name}</Option>)}
                                </Select>
                            </Form.Item>
                        </div>

                        <Form.Item name="address"
                                   className="location-formItem"
                                   label="Адреса"
                                   hasFeedback
                                   rules={[{
                                       required: true,
                                       message: "Це поле є обов'язковим"
                                   },{
                                       required: true,
                                       pattern: /^(?!\s)([\wА-ЩЬЮЯҐЄІЇа-щьюяґєії !"#$%&'()*+,\-.:;<=>?@[\]^_`{}~]){5,100}$/,
                                       message: "Некоректна адреса",
                                   }]}>
                            <Input className="location-input"
                                   placeholder="Адреса"
                            />

                        </Form.Item>
                        <div className="add-club-inline">
                            <Form.Item name="coordinates"
                                       className="location-formItem"
                                       label="Географічні координати"
                                       hasFeedback
                                       rules={[{
                                           required: true,
                                           message: "Некоректні координати",
                                           pattern: /([0-9]+\.[0-9]+), ([0-9]+\.[0-9]+)/
                                       },{
                                           message:"Координати не можуть містити букви",
                                           pattern:/^[^A-Za-zА-Яа-яІіЇїЄєҐґ]*$/
                                       }
                                       ]}>
                                <Input className="location-input"                                    
                                       placeholder="Широта та довгота"/>
                            </Form.Item>
                        </div>
                        <Form.Item name="phone"
                                   className="location-formItem"
                                   label="Номер телефону"
                                   hasFeedback
                                   rules={[
                                       {
                                           required: true,
                                           message: "Це поле є обов'язковим"
                                       },
                                       {
                                           required: false,
                                           pattern: /^\d{9}$/,
                                           message: "Телефон не відповідає вказаному формату"
                                       },
                                       ]}>
                            <Input className="location-input"
                                   prefix='+380'
                                   suffix={
                                       <Tooltip placement="topRight"
                                                title="Телефон не може містити літери, спеціальні символи та пробіли">
                                           <InfoCircleOutlined className="info-icon" />
                                       </Tooltip>
                                   }
                                   placeholder="___________"/>
                        </Form.Item>

                        <div className="location-footer">
                            {  
                                    <Button htmlType="submit"
                                            className="location-button">Додати</Button>
                            }
                        </div>
                    </Form>
                    </div>
            </Content>
                </Modal>
            </div>
        )
       }
}

export default AddCenter_location;