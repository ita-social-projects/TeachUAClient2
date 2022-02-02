import React from "react";
import { Modal, Button, Form, Input, Tooltip, Select } from "antd";
import { Content } from "antd/es/layout/layout";
import { PlusOutlined } from "@ant-design/icons";
import InfoCircleOutlined from "@ant-design/icons/lib/icons/InfoCircleOutlined";
import "./addCenterLocation.scss";
import { getCitiesName } from "../../Services/cities";
import { getDistrictsName } from "../../Services/district";
import { getStationName } from "../../Services/stations";

const { Option } = Select;


class AddCenterLocation extends React.Component {
  state = {
    showModal: false,
    cities: [],
    districts: [],
    stations: [],
    city: null,
    isDisabled: false,
    nameLocation: "",
    address: "",
    coordinates: "",
    phone: "",
    nameLocationValidation: true,
    addressValidation: true,
    coordinatesValidation: true,
    phoneValidation: true,
    cityValidation: true
  };

  handleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  setCityValue = (value) => {
    this.setState({ city: value });
    if (value != null) {
      this.setState({cityValidation: false})
    } else {
      this.setState({cityValidation: true})
    }  
  };

  setValueNameLocation = (e) => {
    this.setState ({nameLocation: e.target.value})
    console.log(e.target.value)
    if (e.target.value.match(
      /^(?!\s)([\wА-ЩЬЮЯҐЄІЇа-щьюяґєії !"#$%&'()*+,\-.\/:;<=>?@[\]^_`{}~]){5,100}$/
    )) {
      this.setState({nameLocationValidation: false})
    } else {
      this.setState({nameLocationValidation: true})
    }
  }

  setValueAddress = (e) => {
    this.setState ({address: e.target.value})
    if (e.target.value.match(
      /^(?!\s)([\wА-ЩЬЮЯҐЄІЇа-щьюяґєії !"#$%&'()*+,\-.\/:;<=>?@[\]^_`{}~]){5,100}$/
    )) {
      this.setState({addressValidation: false})
    } else {
      this.setState({addressValidation: true})
    }
  }

  setValueCoordinates = (e) => {
    this.setState ({coordinates: e.target.value})
    if (e.target.value.match(/([0-9]+\.[0-9]+), ([0-9]+\.[0-9]+)/)) {
      this.setState({coordinatesValidation: false}) 
    } else {
      this.setState({coordinatesValidation: true})
    }
  }

  setValuePhone = (e) => {
    this.setState ({phone: e.target.value})
    if (e.target.value.match(/^\d{10}$/)) {
      this.setState({phoneValidation: false})
    } else {
      this.setState({phoneValidation: true})
    }
  }

// isValidated = () => {
//   if (
        
//   ) {
//     return true
//   } else {
//     return false
//   }
// }

 

  // onFinish = (values) => {
  //   values.key = Math.random();
  //   if (editedLocation) {
  //       const index = locations.findIndex((item) => editedLocation.key === item.key);
  //       locations[index] = values;
  //       setLocations(locations);
  //   } else {
  //       setLocations(addToTable(locations, values));
  //   }
  // };

  componentDidMount() {
    getCitiesName().then((response) => {
      this.setState({ cities: response.data });
    });
    getDistrictsName().then((response) => {
      this.setState({ districts: response.data });
    });
    getStationName().then((response) => {
      this.setState({ stations: response.data });
    });
  }

  render() {
    const { cities, districts, stations } = this.state;

    return (
      <div>
        <span className="addCenter-location">
          <Button
            className="add-location-btn"
            htmlType="submit"
            onClick={this.handleModal}
          >
            <PlusOutlined />
            Додати локацію
          </Button>
        </span>

        <Modal
          className="add-location-modal"
          width={650}
          visible={this.state.showModal}
          handleModal={this.handleModal}
          footer={null}
          onCancel={() => this.handleModal(false)}
          centered
        >
          <Content className="add-location-container" id="location-content">
            <div className="add-location-header">Додати локацію</div>
            <div className="add-location-content">
              <Form
                name="add_location"
                requiredMark={false}
                className="add-location-form"
              >
                <Form.Item
                  name="name_location"
                  className="location-formItem"
                  label="Назва"
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      pattern:
                        /^(?!\s)([\wА-ЩЬЮЯҐЄІЇа-щьюяґєії !"#$%&'()*+,\-.:;<=>?@[\]^_`{}~]){5,100}$/,
                      message: "Некоректна назва локації",
                    },
                  ]}
                >
                  <Input
                    value={this.nameLocation}
                    onChange={this.setValueNameLocation}
                    className="location-input"
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
                <div className="conteiner-select">
                  <Form.Item
                    name="cityName"
                    className="location-formItem-selector"
                    label="Місто"
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Це поле є обов'язковим",
                      },
                    ]}
                  >
                    <Select
                      value={this.city}
                      onSelect={this.setCityValue}
                      className="location-selector"
                      placeholder="Виберіть місто"
                     
                    >
                      {cities.map((city) => (
                        <Option key={city.id} value={city.name}>
                          {city.name}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="districtName"
                    className="location-formItem-selector"
                    label="Район міста"
                    hasFeedback
                  >
                    <Select
                      className="location-selector"
                      placeholder="Виберіть район"
                    >
                      {districts
                        .filter(
                          (district) => district.cityName === this.state.city
                        )
                        .map((filteredDistrict) => (
                          <Option key={filteredDistrict.id}>
                            {filteredDistrict.name}
                          </Option>
                        ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="stationName"
                    className="location-formItem-selector"
                    label="Метро/Місцевість"
                    hasFeedback
                  >
                    <Select
                      className="location-selector"
                      placeholder="Виберіть місцевість"
                    >
                      {stations
                        .filter(
                          (station) => station.cityName === this.state.city
                        )
                        .map((filteredStation) => (
                          <Option key={filteredStation.id}>
                            {filteredStation.name}
                          </Option>
                        ))}
                    </Select>
                  </Form.Item>
                </div>

                <Form.Item
                  name="address"
                  className="location-formItem"
                  label="Адреса"
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Це поле є обов'язковим",
                    },
                    {
                      required: true,
                      pattern:
                        /^(?!\s)([\wА-ЩЬЮЯҐЄІЇа-щьюяґєії !"#$%&'()*+,\-.:;<=>?@[\]^_`{}~]){5,100}$/,
                      message: "Некоректна адреса",
                    },
                  ]}
                >
                  <Input
                    value={this.address}
                    onChange={this.setValueAddress}
                    className="location-input"
                    placeholder="Адреса"
                  />
                </Form.Item>
                <div className="add-club-inline">
                  <Form.Item
                    name="coordinates"
                    className="location-formItem"
                    label="Географічні координати"
                    hasFeedback
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
                      value={this.coordinates}
                      onChange={this.setValueCoordinates}
                      className="location-input"
                      placeholder="Широта та довгота"
                    />
                  </Form.Item>
                </div>
                <Form.Item
                  name="phone"
                  className="location-formItem"
                  label="Номер телефону"
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Це поле є обов'язковим",
                    },
                    {
                      required: false,
                      pattern: /^\d{10}$/,
                      message: "Телефон не відповідає вказаному формату",
                    },
                  ]}
                >
                  <Input
                    value={this.phone}
                    onChange={this.setValuePhone}
                    className="location-input"
                    prefix="+38"
                    suffix={
                      <Tooltip
                        placement="topRight"
                        title="Телефон не може містити літери, спеціальні символи та пробіли"
                      >
                        <InfoCircleOutlined className="info-icon" />
                      </Tooltip>
                    }
                    placeholder="___________"
                  />
                </Form.Item>
                <div className="location-footer">
                  <Button                  
                    htmlType="submit"
                    onClick={()=>{this.handleModal(false)}}
                    className={ this.state.cityValidation || this.state.addressValidation || this.state.coordinatesValidation || this.state.nameLocationValidation || this.state.phoneValidation
                      ? 
                      "location-button-disable"
                         :
                         "location-button-active"
                    }
                    disabled={this.state.cityValidation || this.state.addressValidation || this.state.coordinatesValidation || this.state.nameLocationValidation || this.state.phoneValidation}
                    
                  >
                    Додати
                  </Button>
                
                </div>
              </Form>
            </div>
          </Content>
        </Modal>
      </div>
    );
  }
}



export default AddCenterLocation;
