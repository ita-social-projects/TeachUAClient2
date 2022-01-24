import React from "react";
import { Form, Input, Tooltip, Select, Button,message }  from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import InfoCircleOutlined from "@ant-design/icons/lib/icons/InfoCircleOutlined";
//import cities from "../../data/Cities.json";
//import {getSitiesServise} from '/src/Services/cities'
import { getCitiesName } from "/src/Services/cities";
import { getDistrictsName } from "/src/Services/district";
import { getStationName } from "/src/Services/stations";
import {postLocationServices} from '/src/Services/club'; 
import "./addClubContactLocation.scss";

const { Option } = Select;

class AddClubContactLocation extends React.Component {
  state = {
    coordinates: 0,
    isDisabled: true,
    cities: [],
    districts: [],
    stations: [],
    locationName:'',
    locationAddress:'',
    locationCityId:'',
    locationDistrictId:'',
    locationStationId:'',
    locationCityName:'',
    locationDistrictName:'',
    locationStationName:'',
    locationCoordinates:'',
    locationLongitude:'',
    locationLatitude:'',
    phone:''
  };

  handlelocationName= (event) =>{
    this.setState({locationName:event.target.value})
}
  handlelocationAddress = (event) => {
    this.setState({ locationAddress: event.target.value });
  };

  handlelocationDistrict = (id) => {
    this.setState({locationDistrictId:id})
    this.state.districts.filter((district)=>{
      if(district.id==id){
        this.setState({ locationDistrictName: district.name });
      }
    })
    
    
  };

  handlelocationStation= (value) => {
    this.setState({locationStationId:value});
    this.state.stations.filter((station)=>{
      if(station.id=== +value){
        this.setState({locationStationName:station.name})
      }
    })
  };
  handlelocationCoordinates=(event)=>{
    this.setState({ locationCoordinates: event.target.value });
    this.setState({locationLatitude:event.target.value.split(', ')[0]});
    this.setState({locationLongitude:event.target.value.split(', ')[1]})
  };

  handlePhone=(event)=>{
    this.setState({ phone: 0+event.target.value });
  };

  getCityValue = (value) => {
    this.setState({ locationCityName: value });
    this.state.cities.filter((element)=>{
      if(element.name==value){
        this.setState({locationCityId:element.id})
      }
    });
  };
  postLocation=()=>{
    postLocationServices(
      this.state.locationName,
      this.state.locationAddress,
      this.state.locationCityId,
      this.state.locationDistrictId,
      this.state.locationStationId,
      this.state.locationCityName,
      this.state.locationDistrictName,
      this.state.locationStationName,
      this.state.locationCoordinates,
      this.state.locationLongitude,
      this.state.locationLatitude,
      this.state.phone
    ).then((response)=>{
      message.success({content:'успішно додана локація'})
      console.log(response.status)
    }).catch(()=>{
   
      message.error("помилка додавання локації");
  });
  }
  onFinish=()=>{
    this.postLocation();
    this.props.handlelocationShowModal();

  }
  componentDidMount() {
    getCitiesName().then((response) => {
      this.setState({ cities: response.data });
      console.log(response.data)
    });
    getDistrictsName().then((response) => {
      this.setState({ districts: response.data });
      console.log(response.data)
    });
    getStationName().then((response) => {
      this.setState({ stations: response.data });
      console.log(response.data)
    });
  }
  render() {
    console.log(this.state.locationCityId)
    return (
      <Form
      onFinish={this.onFinish}>
        <h3>Додати Локацію</h3>
        <Form.Item
          name="name"
          className="add-club-row"
          label="Назва"
          onChange={this.handlelocationName}
          hasFeedback
          rules={[
            {
              required: true,
              pattern:
                /^(?!\s)([\wА-ЩЬЮЯҐЄІЇа-щьюяґєії !"#$%&'()*+,\-./:;<=>?@[\]^_`{}~]){5,100}$/,
              message: "Некоректна назва локації",
            },
          ]}
        >
          <Input
            className="add-club-input"
  
            suffix={
              <Tooltip
                placement="bottomRight"
                title="Це поле може містити українські та англійські символи довжиною від 5-100. також цифри і спец.символи (!#$%&'()*+,-./:;<=>?@[]^_`{}~)"
              >
                <InfoCircleOutlined className="info-icon" />
              </Tooltip>
            }
            placeholder="Назва локації"
          />
        </Form.Item>
        <div className="add-club-inline">
          <Form.Item
            name="cityName"
            className="add-club-row"
            label="Місто"
            // initialValue={editedLocation && editedLocation.cityName}
         
            hasFeedback
            rules={[
              {
                required: true,
                message: "Це поле є обов'язковим",
              },
            ]}
          >
            <Select
              onSelect={this.getCityValue}
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
              optionFilterProp="children"
            >
              {this.state.cities.map((city) => (
                <Option key={city.id} value={city.name}>
                  {city.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="districtName"
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
              optionFilterProp="children"
             onSelect={this.handlelocationDistrict}
            >
              {this.state.districts
              .filter((district) => district.cityName === this.state.locationCityName)
                .map((filteredDistrict) => (
                  <Option key={filteredDistrict.id}>
                    {filteredDistrict.name}
                  </Option>
                ))}
              
            </Select>
          </Form.Item>
          <Form.Item
            name="stationName"
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
              optionFilterProp="children"
              onSelect={this.handlelocationStation}
            >
                {this.state.stations
                       .filter((station) => station.cityName === this.state.locationCityName)
                       .map((filteredStation) => (
                          <Option key = {filteredStation.id}
                        >
                          {filteredStation.name}
                          </Option>
                        ))
                      }
            </Select>
          </Form.Item>
        </div>
        <Form.Item
          name="address"
          className="add-club-row"
          label="Адреса"
          hasFeedback
          onChange={this.handlelocationAddress}
          rules={[
            {
              required: true,
              message: "Це поле є обов'язковим",
            },
            {
              required: true,
              pattern:
                /^(?!\s)([\wА-ЩЬЮЯҐЄІЇа-щьюяґєії !"#$%&'()*+,\-./:;<=>?@[\]^_`{}~]){5,100}$/,
              message: "Некоректна адреса",
            },
          ]}
        >
          <Input className="add-club-input" placeholder="Адреса" />
          {/*<AddClubInputAddress*/}
          {/*    editedLocation={editedLocation}*/}
          {/*    form={form}*/}
          {/*    setCityName={setCityName}*/}
          {/*    onChange={handleSelect}/>*/}
        </Form.Item>
        <div className="add-club-inline">
          <Form.Item
            name="coordinates"
            className="add-club-row"
            label="Географічні координати"
            hasFeedback
            onChange={this.handlelocationCoordinates}
            rules={[
              {
                required: true,
                message: "Некоректні координати",
                pattern: /([0-9]+\.[0-9]+), ([0-9]+\.[0-9]+)/,
              },
              {
                message: "Координати не можуть містити букви",
                pattern: /^[^A-Za-zА-Яа-яІіЇїЄєҐґ]*$/,
              },
            ]}
          >
            <Input
              className="add-club-input add-club-select"
              value={this.state.coordinates}
              onInput={(e) => {
                this.setState({ coordinates: e.target.value });
              }}
              // suffix={
              //     <Tooltip title="Буде автоматично заповнено при введені адреси">
              //         <InfoCircleOutlined className="info-icon"/>
              //     </Tooltip>
              // }
              placeholder="Широта та довгота"
            />
          </Form.Item>
        </div>
        <Form.Item
          name="phone"
          className="add-club-row"
          label="Номер телефону"
          onChange={this.handlePhone}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Введіть номер телефону",
            },
            {
              required: false,
              pattern: /^[^A-Za-zА-Яа-яІіЇїЄєҐґ]*$/,
              message: "Телефон не може містити літери",
              // message: 'Введіть прізвище',
            },
            {
              required: true,
              pattern: /^[^\s]*$/,
              message: "Телефон не може містити пробіли",
            },
            {
              required: false,
              pattern: /^[^-`~!@#$%^&*()_+={}\\|\\:;“’'<,>.?๐฿]*$/,
              message: "Телефон не може містити спеціальні символи",
            },
            {
              pattern: /^.{9}$/,
              message: "Телефон не відповідає вказаному формату",
            },
          ]}
        >
          <Input
            className="registration-box"
            placeholder="__________"
            prefix="+380"
            suffix={<PhoneOutlined className="phone-icon" />}
          />
        </Form.Item>
        <div className="add-club-content-footer add-club-add-location-button">
          {this.state.isDisabled ? (
            <Button
            onClick={()=>{console.log(this.state)}}
              htmlType="submit"
              className="flooded-button add-club-content-next"
            >
              Додати
            </Button>
          ) : (
            <Button
              disabled={this.state.isDisabled}
              onClick={()=>{console.log(this.state)}}
              htmlType="submit"
              className="flooded-button add-club-content-next-disabled"
            >
              Додати
            </Button>
          )}
        </div>
      </Form>
    );
  }
}

export default AddClubContactLocation;
