import React from "react";
import { Component } from "react";
import "./left_side_search.scss";
import "antd/dist/antd.css";
import { Radio, Select, Checkbox, Col, Input } from "antd";
import { getCitiesName } from "../../Services/cities";
import { getDistrictsName } from "../../Services/district";
import { getStationName } from "../../Services/stations";
import { getCategoriesService } from "../../Services/category";
import { getClubs } from "../../Services/clubs";

const { Option } = Select;

class LeftSearch extends Component {
  state = {
    value: 1,
    show: true,
    cities: [],
    districts: [],
    stations: [],
    categories: [],
    clubs: [],
    city: "",
    cityName: "",
  };

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  getCityValue = (value) => {
    this.setState({ city: value });
  };

  toggleRadioChange = () => {
    this.setState({ show: false });
  };

  componentDidMount() {
     getCitiesName().then((response) => {
      this.setState({ cities: response.data, city: response.data[0].name });
    });
    getDistrictsName().then((response) => {
      this.setState({ districts: response.data });
    });
    getStationName().then((response) => {
      this.setState({ stations: response.data });
    });

    getCategoriesService().then((response) => {
      this.setState({ categories: response.data });
    });

    getClubs().then((response) => {
      this.setState({ clubs: response.data });
    });
  }
  componentDidUpdate(){
    this.props.setSearchParams(this.state)
  }
  render() {
    const { cities, districts, stations, categories, clubs, value, cityName } =
      this.state;

    console.log(this.state.cityName);

    return (
      <div className="advanced-search">
        <div className="advanced-search-main">
          <h1 className="advanced-search-header">Розширений пошук</h1>
          <form>
            <p className="advanced-search-title">Гурток/Центр</p>
            <Radio.Group onChange={this.onChange} value={value}>
              <Radio
                onClick={() => {
                  this.setState({ show: true });
                }}
                value={1}
              >
                <span className="advanced-search-span" checked>
                  Гурток
                </span>
              </Radio>
              <br />
              <Radio onClick={this.toggleRadioChange} value={2}>
                <span className="advanced-search-span">Центр</span>
              </Radio>
            </Radio.Group>
            <p className="advanced-search-title">Місто</p>
            <h1> {cityName}</h1>
            <label>
              <Select
                onSelect={this.getCityValue}
                className="select-style"
                placeholder="Виберіть місто"
                allowClear
                value={this.state.city}
              >
                {cities.map((city) => (
                  <Option key={city.id} value={city.name}>
                    {city.name}
                  </Option>
                ))}
              </Select>
            </label>
            <p className="advanced-search-title">Район міста</p>

            <Select
              placeholder="Виберіть район"
              className="select-style"
              allowClear
            >
              {districts
                .filter((district) => district.cityName === this.state.city)
                .map((filteredDistrict) => (
                  <Option key={filteredDistrict.id}>
                    {filteredDistrict.name}
                  </Option>
                ))}
            </Select>
            <p className="advanced-search-title">Найближча станція метро</p>

            <Select
              placeholder="Виберіть станцію"
              className="select-style"
              allowClear
            >
              {stations
                .filter((station) => station.cityName === this.state.city)
                .map((filteredStation) => (
                  <Option key={filteredStation.id}>
                    {filteredStation.name}
                  </Option>
                ))}
            </Select>
            {this.state.show ? (
              <div>
                <p className="advanced-search-title">Ремоут</p>
                <Checkbox.Group>
                  <Checkbox key={clubs.id}> Доступний онлайн</Checkbox>
                </Checkbox.Group>
                <p className="advanced-search-title">Категорії</p>
                <Col className="col-style">
                  {categories.map((category) => (
                    <Checkbox key={category.id}>{category.name}</Checkbox>
                  ))}
                </Col>
                <p className="advanced-search-title">Вік дитини</p>
                  <input
                  className="years-child"
                  maxLength="3"
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
                <span className="advanced-search-span-years">років</span>
              </div>
            ) : null}
          </form>
          <div className="choice-btn-div">
            <button className="button-after-form-clear">
              <span className="choice-btn-clear">Очистити</span>
            </button>
            <button className="button-after-form-check">
              <span className="choice-btn-chech">Застосувати</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export { LeftSearch };
