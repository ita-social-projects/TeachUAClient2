import React from "react";
import { Form, Input, Modal } from "antd";
import { MailOutlined } from "@ant-design/icons";
import "./restorePasswordModal.scss";

class RestorePasswordModal extends React.Component {
  state = {
    showModal: false,
  };

  handleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };
  render() {
    return (
      <div>
        <div className="reset-button" />
        <a onClick={this.handleModal} className="restore-password-button">
          Забули пароль?
        </a>
        <div />

        <Modal
          visible={this.state.showModal}
          handleModal={this.handleModal}
          footer={null}
          onCancel={() => this.handleModal(false)}
          centered
          className="restore-password-modal"
        >
          <div className="login-header-text">Відновлення</div>
          <Form>
            <div className="restore-password-section">
              <Form.Item
                name="email"
                className="restore-password-form"
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
                  className="restore-password-input"
                  placeholder="Введіть ваш емейл"
                  suffix={<MailOutlined classname="mail-icon" />}
                />
              </Form.Item>
            </div>

            <div className="restore-password-footer">
              <Form.Item>
                <button className="login-button" htmlType="submit">
                  Відновити
                </button>
              </Form.Item>
            </div>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default RestorePasswordModal;
