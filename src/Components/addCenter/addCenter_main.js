import React from "react";
import { Form, Input, Tooltip } from "antd";
import InfoCircleOutlined from "@ant-design/icons/lib/icons/InfoCircleOutlined";
import "./addCenter_main.scss";
import AddCenter_location from "./addCenter_location";

class AddCenter_main extends React.Component {
  render() {
    return (
      <div className="main-info">
        <Form name="main-information" layout="horizontal">
          <div className="form-fields">
            <Form.Item
              name="nameCenter"
              className="name-Center"
              label="Назва центру"
              rules={[
                {
                  required: true,
                  pattern:
                    /^(?!\s)([\wА-ЩЬЮЯҐЄІЇа-щьюяґєії !"#$%&'()*+,\-.:;<=>?@[\]^_`{}~]){5,100}$/,
                  message: "Некоректна назва центру",
                },
              ]}
            >
              <Input
                className="name-Center-input"
                suffix={
                  <Tooltip
                    placement="bottomRight"
                    title="Це поле може містити тільки українські 
                                        та англійські літери, довжиною 5-100 символів"
                  >
                    <InfoCircleOutlined className="info-icon" />
                  </Tooltip>
                }
                placeholder="Введіть назву центру"
              />
            </Form.Item>
            <Form.Item
              name="locations"
              className="name-Center"
              label="Локації"
              rules={[
                {
                  required: true,
                  message: "Додайте і виберіть локацію",
                },
              ]}
            ></Form.Item>

            <AddCenter_location />
          </div>
        </Form>
      </div>
    );
  }
}

export default AddCenter_main;
