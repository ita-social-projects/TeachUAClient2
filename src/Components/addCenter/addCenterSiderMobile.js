import React from "react";
import { Steps } from "antd";
import PropTypes from "prop-types";
import "./addCenter.scss";

const { Step } = Steps;

class AddCenterSiderMobile extends React.Component {
  render() {
    return (
      <div className="sider-mobile">
        <Steps
          className="sider-mobile-steps"
          direction="horizontal"
          current={this.props.current}
        >
          <Step
            style={{
              display: this.props.current == 0 ? "block" : "none",
              minWidth: 220,
              paddingLeft: 10,
            }}
            title="Основна інформація"
          ></Step>
          <Step
            className="sider-mobile-step"
            style={{
              display:
                this.props.current == 0 || this.props.current == 1
                  ? "block"
                  : "none",
              textAlign: this.props.current == 0 ? "right" : "left",
              paddingLeft: 10,
            }}
            title="Контакти"
          ></Step>
          <Step
            style={{
              display:
                this.props.current == 1 ||
                this.props.current == 2 ||
                this.props.current == 3
                  ? "block"
                  : "none",
              textAlign: this.props.current == 1 ? "right" : "left",
              paddingLeft: 10,
            }}
            title="Опис"
          ></Step>
          <Step
            style={{
              display:
                this.props.current == 2 || this.props.current == 3
                  ? "block"
                  : "none",
            }}
            title="Гуртки"
          ></Step>
        </Steps>
      </div>
    );
  }
}

AddCenterSiderMobile.propTypes = {
  current: PropTypes.number,
};

export default AddCenterSiderMobile;
