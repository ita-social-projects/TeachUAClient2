import React from "react";
import { Form } from "antd";
import "./addCenterClubs.scss";

class AddCenterClubs extends React.Component {
  render() {
    return (
      <div>
        <Form
          name="addCenter_clubs"
          className="addCenter-clubs"
          layout="horizontal"
        >
          <Form.Item
            className="addCenter-clubs-item"
            label="Оберіть гурток"
            name="clubs"
            rules={[
              {
                required: true,
                message: "Виберіть гуртки приналежні до центру",
              },
            ]}
          >
            <div className="form-fields"></div>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default AddCenterClubs;
