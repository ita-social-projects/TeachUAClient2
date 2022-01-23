import React from "react";
import { Form, Input, Tooltip, Select, Button } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import InfoCircleOutlined from "@ant-design/icons/lib/icons/InfoCircleOutlined";
//import cities from "../../data/Cities.json";
//import {getSitiesServise} from '/src/Services/cities'
import { getCitiesName } from "/src/Services/cities";
import { getDistrictsName } from "/src/Services/district";
import { getStationName } from "/src/Services/stations";
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
  /*
  handleState(handleState,event){
      this.setState({handleState:event.target.value})
  }*/
  
  handlelocationName= (value) =>{
    this.setState({locationName:value})
}
  handlelocationAddress = (event) => {
    this.setState({ locationAddress: event.target.value });
  };

  handlelocationCityId = (event) => {
    this.setState({ locationCityId: event.target.value });
  };

  handlelocationDistrictId = (event) => {
    this.setState({ locationDistrictId: !event.target.value });
  };

  handlelocationStationId = (event) => {
    this.setState({ locationStationId: event.target.value });
  };

  handlelocationCityName = (value) => {
    this.setState({ locationCityName: value });
  };

  handlelocationDistrictName = (value) => {
    this.setState({ locationDistrictName: value });
  };

  handlelocationStationName= (value) => {
    this.setState({ locationStationName: value });
  };
  handlelocationCoordinates=(event)=>{
    this.setState({ locationCoordinates: event.target.value });
  };
  handlelocationLongitude=(event)=>{
    this.setState({ locationLongitude: event.target.value});
  };

  handlelocationLatitude=(event)=>{
    this.setState({ locationLatitude: event.target.value });
  };
  handlephone=(event)=>{
    this.setState({ phone: event.target.value });
  };



  getCityValue = (value) => {
    this.setState({ locationCityName: value });
  };

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
    return (
      <Form>
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
              onClick={() => {
                console.log(this.state.locationName);
              }}
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
              onSelect={this.handlelocationDistrictName}
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
              onSelect={this.handlelocationStationName}
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
