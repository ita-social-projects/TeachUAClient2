import React from "react";
import {Form,Input,Tooltip,Select,Button} from "antd";
import { PhoneOutlined} from "@ant-design/icons";
import InfoCircleOutlined from "@ant-design/icons/lib/icons/InfoCircleOutlined";
import cities from '../../data/Cities.json'
import {getSitiesServise} from '/src/Services/cities'
import './addClubContactLocation.scss'


const {Option} = Select;

class AddClubContactLocation extends React.Component{
/*
    onChange=(e)=>{
        console.log(e.value);
    }*/
    state={
        coordinates:0,
        isDisabled:true,
        sities:[]
    }
    componentDidMount(){
        getSitiesServise().then((response)=>{
            this.setState({sities:response.data})
        })
    }
    render(){
        return(
            
            <Form>
                <h3>Додати Локацію</h3>
                <Form.Item name="name"
                                   className="add-club-row"
                                   label="Назва"
                                   hasFeedback
                                   rules={[
                                       {
                                           required: true,
                                           pattern: /^(?!\s)([\wА-ЩЬЮЯҐЄІЇа-щьюяґєії !"#$%&'()*+,\-./:;<=>?@[\]^_`{}~]){5,100}$/,
                                           message: "Некоректна назва локації",
                                       }]}
                        >
                            <Input className="add-club-input"
                                   suffix={
                                       <Tooltip placement="bottomRight"
                                                title="Це поле може містити українські та англійські символи довжиною від 5-100. також цифри і спец.символи (!#$%&'()*+,-./:;<=>?@[]^_`{}~)">
                                           <InfoCircleOutlined className="info-icon" />
                                       </Tooltip>
                                   }
                                   placeholder="Назва локації" />
                        </Form.Item>
                        <div className="add-club-inline">
                            <Form.Item name="cityName"
                                       className="add-club-row"
                                       label="Місто"
                                      // initialValue={editedLocation && editedLocation.cityName}
                                       hasFeedback
                                       rules={[{
                                           required: true,
                                           message: "Це поле є обов'язковим"
                                       }]}>
                                <Select
                                    onClick={(e)=>{console.log(e.value)}}
                                    className="add-club-select"
                                    placeholder="Виберіть місто"
                                 /*   onChange={(value) => {
                                        if (cityName) {
                                            cityOnInput === value ?
                                                setInputAddressProps({validateStatus: 'success'}) :
                                                setInputAddressProps({validateStatus: 'error'});
                                        }
                                        changeCity();
                                        setCityName(value);
                                    }}*/
                                    optionFilterProp="children">
                                    {this.state.sities.map(city => <Option key={city.id}
                                        value={city.name}>{city.name}</Option>)}
                                </Select>
                            </Form.Item>
                            <Form.Item name="districtName"
                                       className="add-club-row"
                                       label="Район міста"
                                       hasFeedback
                                       // rules={[{
                                       //     required: true,
                                       //     message: "Це поле є обов'язковим"
                                       // }]}
                                >
                                <Select
                                    className="add-club-select"
                                    placeholder="Виберіть район"
                                    optionFilterProp="children">
                                    {cities.map(district => <Option key={cities.id} value={district.name}>{district.name}</Option>)}
                                </Select>
                            </Form.Item>
                            <Form.Item name="stationName"
                                       className="add-club-row"
                                       label="Метро/Місцевість"
                                       hasFeedback
                                       // rules={[{
                                       //     required: true,
                                       //     message: "Це поле є обов'язковим"
                                       // }]}
                                >
                                <Select
                                    className="add-club-select"
                                    placeholder="Виберіть місцевість"
                                    optionFilterProp="children">
                                    {cities.map(station => <Option key={station.id} value={station.name}>{station.name}</Option>)}
                                </Select>
                                    </Form.Item>
                        </div>
                        <Form.Item name="address"
                                   className="add-club-row"
                                   label="Адреса"
                                   hasFeedback
                                   rules={[{
                                       required: true,
                                       message: "Це поле є обов'язковим"
                                   },{
                                       required: true,
                                       pattern: /^(?!\s)([\wА-ЩЬЮЯҐЄІЇа-щьюяґєії !"#$%&'()*+,\-./:;<=>?@[\]^_`{}~]){5,100}$/,
                                       message: "Некоректна адреса",
                                   }]}>
                            <Input className="add-club-input"
                                   placeholder="Адреса"
                            />
                            {/*<AddClubInputAddress*/}
                            {/*    editedLocation={editedLocation}*/}
                            {/*    form={form}*/}
                            {/*    setCityName={setCityName}*/}
                            {/*    onChange={handleSelect}/>*/}
                        </Form.Item>
                        <div className="add-club-inline">
                            <Form.Item name="coordinates"
                                       className="add-club-row"
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
                                <Input className="add-club-input add-club-select"
                                     value={this.state.coordinates}
                                       onInput={e => {this.setState({coordinates:e.target.value})} }

                                    // suffix={
                                       //     <Tooltip title="Буде автоматично заповнено при введені адреси">
                                       //         <InfoCircleOutlined className="info-icon"/>
                                       //     </Tooltip>
                                       // }
                                       placeholder="Широта та довгота"/>
                            </Form.Item>
                        </div>
                        <Form.Item name="phone"
                            className="add-club-row"
                            label="Номер телефону"
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
                        <div className="add-club-content-footer add-club-add-location-button">
                            {
                                this.state.isDisabled ?
                                    <Button htmlType="submit"
                                            className="flooded-button add-club-content-next">Додати</Button> :
                                    <Button disabled={this.state.isDisabled} htmlType="submit"
                                            className="flooded-button add-club-content-next-disabled">Додати</Button>
                            }
                        </div>
            </Form>
        )
    }
}


export default AddClubContactLocation