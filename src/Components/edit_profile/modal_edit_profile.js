import React from 'react';
import { Component } from "react/cjs/react.production.min";
import { Modal} from 'antd';
import FormEditProfile from "./form_edit_profile";
import 'antd/dist/antd.css';
import './edit_profile.scss'

class ModalEditProfile extends Component {
    state = {
        showEditProfileModal: false
    }
    handleShowEditProfileModal = () => {
        this.setState({ showEditProfileModal: !this.state.showEditProfileModal });
    };
    render() {
        return (
            <div>
                <a onClick={() => { this.handleShowEditProfileModal() }} >Редагувати профіль</a>
                <Modal
                    width={880}
                    className='registration_modal'
                    visible={this.state.showEditProfileModal}
                    onCancel={() => { this.setState({ showEditProfileModal: !this.state.showEditProfileModal }) }}
                    footer={null} >
                    <FormEditProfile />
                </Modal>
            </div>
        )
    }
}

export default ModalEditProfile;