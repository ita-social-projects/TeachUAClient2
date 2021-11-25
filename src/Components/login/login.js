import React from "react";
import { Form, Input, Modal } from "antd";
import { MailOutlined } from "@ant-design/icons";
import "./login.scss";
import RestorePasswordModal from "./restorePasswordModal";

class Login extends React.Component {
  state = {
    showModal: false,
  };

  handleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    return (
      <div>
        <a onClick={this.handleModal} className="btn-showModal">
          Увійти
        </a>
        <Modal
          className="login-body-modal"
          visible={this.state.showModal}
          handleModal={this.handleModal}
          footer={null}
          onCancel={() => this.handleModal(false)}
          centered
        >
          <div className="login-body">
            <div className="login-header">
              <div className="login-header-text">Вхід</div>
            </div>
            <div className="google-icon">
              <a href="#">
                <img
                  title=""
                  src="./static/images/login/login-google.png"
                  alt=""
                />
              </a>
            </div>
            <div className="label-or">
              <div className="label-or-text">або</div>
            </div>
            <div className="login-field">
              <Form>
                <Form.Item
                  name="email"
                  className="login-input"
                  label="Емейл"
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: false,
                    },
                  ]}
                >
                  <Input
                    className="login-box"
                    placeholder="Введіть ваш емейл"
                    suffix={<MailOutlined classname="mail-icon" />}
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  className="login-input"
                  label="Пароль"
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: false,
                    },
                  ]}
                >
                  <Input.Password
                    className="login-box"
                    placeholder="Введіть ваш пароль"
                  />
                </Form.Item>
              </Form>
            </div>
            <div className="login-button-box">
              <button className="login-button" htmlType="submit">
                Увійти
              </button>
            </div>
            <div className="reset-button">
              <RestorePasswordModal />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Login;
