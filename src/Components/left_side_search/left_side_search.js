import React from "react";
import { Component } from "react";
import "./left_side_search.scss";
import "antd/dist/antd.css";
import { Select, Checkbox, Input, Form } from "antd";
import { getCitiesName } from "../../Services/cities";
import { getDistrictsName } from "../../Services/district";
import { getStationName } from "../../Services/stations";
import { getCategoriesService } from "../../Services/category";
import { getClubs } from "../../Services/clubs";
import getUrlSearchParams from "../../Services/urlSearchParams";

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
    city: null,
    age: null,
    districtName: null,
    stationName: null,
    categoriesName: [],
    isOnline: true,
    centerClub: null,
  };

  getSearchParams = (
    city,
    districtName,
    stationName,
    isOnline,
    categoriesName,
    age
  ) => {
    getUrlSearchParams(
      city,
      districtName,
      stationName,
      isOnline,
      categoriesName,
      age
    )
      .then((response) => {
        setNewClubs();
        console.log(response.data);
      })
      .catch((value) => {
        console.log(value);
      });
  };

  handleSearchCategoriesName = (event) => {
    this.setState({ categoriesName: event.target.value });
    console.log(this.state.categoriesName);
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

    this.getSearchParams("Київ");
  }

  render() {
    const { cities, districts, stations, categories } = this.state;

    return (
      <div className="advanced-search">
        <div className="advanced-search-main">
          <h1 className="advanced-search-header">Розширений пошук</h1>

          <Form
            onValuesChange={(...formValues) => {
              console.log(formValues[1]);
              this.setState({ city: formValues[1].city });
              getUrlSearchParams(
                formValues[1].city,
                formValues[1].district,
                formValues[1].station,
                formValues[1].isOnline,
                formValues[1].categories,
                formValues[1].age
              );
            }}
          >
            <Form.Item
              name="city"
              label="Місто"
              className="advanced-search-title"
            >
              <Select
                className="select-style"
                placeholder="Виберіть місто"
                allowClear
                defaultValue="Київ"
              >
                {cities.map((city) => (
                  <Option key={city.id} value={city.name}>
                    {city.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item name="district" label="Район міста">
              <Select
                placeholder="Виберіть район"
                className="select-style"
                allowClear
              >
                {districts
                  .filter((district) => district.cityName === this.state.city)
                  .map((filteredDistrict) => (
                    <Option key={filteredDistrict.name}>
                      {filteredDistrict.name}
                    </Option>
                  ))}
              </Select>
            </Form.Item>

            <Form.Item name="station" label="Найближча станція метро">
              <Select
                placeholder="Виберіть станцію"
                className="select-style"
                allowClear
              >
                {stations
                  .filter((station) => station.cityName === this.state.city)
                  .map((filteredStation) => (
                    <Option key={filteredStation.name}>
                      {filteredStation.name}
                    </Option>
                  ))}
              </Select>
            </Form.Item>

            <Form.Item name="isOnline" label="Ремоут" valuePropName="checked">
              <Checkbox>Доступний онлайн</Checkbox>
            </Form.Item>

            <Form.Item name="categories">
              <Checkbox.Group className="add-club-categories">
                {categories.map((category) => (
                  <Checkbox
                    key={category.name}
                    width={100}
                    className="add-club-categories-item"
                    value={category.name}
                  >
                    {category.name}
                  </Checkbox>
                ))}
              </Checkbox.Group>
            </Form.Item>

            <Form.Item
              name="age"
              label="Вік дитини"
              rules={[{ required: true }]}
            >
              <Input
                className="years-child"
                maxLength="3"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </Form.Item>
          </Form>
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
