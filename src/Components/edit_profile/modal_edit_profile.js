import React from "react";
import { Component } from "react";
import { Button, Modal } from "antd";
import FormEditProfile from "./form_edit_profile";
import "antd/dist/antd.css";
import "./edit_profile.scss";
import { ArrowRightOutlined } from "@ant-design/icons";

class ModalEditProfile extends Component {
  state = {
    showEditProfileModal: false,
  };
  handleShowEditProfileModal = () => {
    this.setState({ showEditProfileModal: !this.state.showEditProfileModal });
  };
  render() {
    return (
      <div className="profile-information-block__content-right">
        <Button
          className="edit-profile-button"
          onClick={this.handleShowEditProfileModal}
        >
          Редагувати профіль &nbsp; <ArrowRightOutlined />
        </Button>
        <Modal
          width={880}
          className="edit-profile-modal"
          visible={this.state.showEditProfileModal}
          onCancel={this.handleShowEditProfileModal}
          footer={null}
        >
          <FormEditProfile />
        </Modal>
      </div>
    );
  }
}

export default ModalEditProfile;
