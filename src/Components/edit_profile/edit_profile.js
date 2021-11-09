import React from "react";
import { Component } from 'react';
import { Modal} from 'antd';
import 'antd/dist/antd.css';
import './edit_profile.scss'
import FormEditProfile from "./form_edit_profile";

class EditProfile extends Component {
    state = {
        showModal: false
    }
    handleOk = () => {
        this.setState({ showModal: !this.state.showModal });
    };
    render() {
        return (
            <div>
                <a onClick={() => { this.handleOk() }} >Редагувати профіль</a>
                <Modal
                    width={880}
                    className='registration_modal'
                    visible={this.state.showModal}
                    onCancel={() => { this.setState({ showModal: !this.state.showModal }) }}
                    footer={null} >
                       <FormEditProfile />

                    

                </Modal>
            </div>
        )
    }
}

export default EditProfile;