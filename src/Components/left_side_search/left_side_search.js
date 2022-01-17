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
    show: true,
    cities: [],
    districts: [],
    stations: [],
    categories: [],
    clubs: [],
    city: "",
  };

  getCityValue = (value) => {
    this.setState({ city: value });
  };

  toggleRadioChange = () => {
    this.setState({ show: false });
  };

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

    getCategoriesService().then((response) => {
      this.setState({ categories: response.data });
    });

    getClubs().then((response) => {
      this.setState({ clubs: response.data });
    });
  }

  render() {
    const { cities, districts, stations, categories, clubs } = this.state;
    return (
      <div className="advancedSearch">
        <div className="advancedSearchMain">
          <h1 className="advancedSearchHeader">Розширений пошук</h1>
          <form>
            <p className="advancedSearchTitle">Гурток/Центр</p>
            <Radio.Group onChange={this.onChange}>
              <Radio
                onClick={() => {
                  this.setState({ show: true });
                }}
                value={1}
              >
                <span className="advancedSearchSpan" checked>
                  Гурток
                </span>
              </Radio>
              <br />
              <Radio onClick={this.toggleRadioChange} value={2}>
                <span className="advancedSearchSpan">Центр</span>
              </Radio>
            </Radio.Group>
            <p className="advancedSearchTitle">Місто</p>
            <label>
              <Select
                onSelect={this.getCityValue}
                className="selectStyle"
                placeholder="Виберіть місто"
                allowClear
              >
                {cities.map((city) => (
                  <Option key={city.id} value={city.name}>
                    {city.name}
                  </Option>
                ))}
              </Select>
            </label>
            <p className="advancedSearchTitle">Район міста</p>

            <Select placeholder="Виберіть район" className="selectStyle" allowClear>
              {districts
                .filter((district) => district.cityName === this.state.city)
                .map((filteredDistrict) => (
                  <Option key={filteredDistrict.id}>
                    {filteredDistrict.name}
                  </Option>
                ))}
            </Select>
            <p className="advancedSearchTitle">Найближча станція метро</p>

            <Select placeholder="Виберіть станцію" className="selectStyle" allowClear>
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
                <p className="advancedSearchTitle">Ремоут</p>
                <Checkbox.Group>
                  <Checkbox key={clubs.id}> Доступний онлайн</Checkbox>
                </Checkbox.Group>
                <p className="advancedSearchTitle">Категорії</p>
                <Col className="colStyle">
                  {categories.map((category) => (
                    <Checkbox key={category.id}>{category.name}</Checkbox>
                  ))}
                </Col>
                <p className="advancedSearchTitle">Вік дитини</p>
                <Input className="test" />
                <span className="advancedSearchSpanYears">років</span>
              </div>
            ) : null}
          </form>
          <div className="choice_btn_div">
            <button className="button_after_form_clear">
              <span className="choice_btn_clear">Очистити</span>
            </button>
            <button className="button_after_form_check">
              <span className="choice_btn_chech">Застосувати</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export { LeftSearch };
