import React from "react";
import "antd/dist/antd.css";
import "./profile.scss";
import logo from "./avatar.svg";
import mail from "./mail.svg";
import profile from "./Vector.svg";
import { DownOutlined, PlusOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import ModalEditProfile from "../edit_profile/modal_edit_profile";
import AddCenter from "../addCenter/addCenter";
import AddClub from "../add_Club/AddClub";
import { getUsersService } from "../../Services/user";
class Profile extends React.Component {
  state = {
    user:[]
  }
  componentDidMount() {
    const showId = localStorage.getItem("id");
    getUsersService().then((response) => {
      const usersValue = response.data.filter((user) => user.id === +showId);
      this.setState({
        user: usersValue[0]
      });
    });

    
  }

  render() {
    console.log(this.state.user)
    const menu = (
      <Menu>
        <Menu.Item>
          <AddClub />
        </Menu.Item>
        <Menu.Item>
          <AddCenter />
        </Menu.Item>
      </Menu>
    );
    return (
      <div className="profile">
        <div className="profile-office-block">
          <div className="profile-office-block__wrapper">
            <h3>Особистий кабінет</h3>
            <div className="profile-office-block__content">
              <div className="profile-office-block__profile">
                <img src={profile}></img>
                <p>Профіль</p>
              </div>
              <div className="profile-office-block__message">
                <img src={mail}></img>
                <p>Повідомлення</p>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-information-block" style={{ backgroundImage: "url(/src/Components/profile/Background_profile.svg)" }}>
          <div className="profile-information-block__wrapper">
            <h2 className="my_profile_text">Мій профіль</h2>
            <div className="profile-information-block__card">
              <div className="profile-information-block__content-left">
                <div className="profile-information-block__name-wrapper">
                  <div className="profile-information-block__name">
                    <div className="name-wrapper">
                      <img src={logo} />
                      <div className="name">
                        <h2>{this.state.user.firstName} {this.state.user.lastName}</h2>
                        <h3>{this.state.user.roleName}</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="number-wrapper">
                  <h4>Телефон</h4>
                  <p>{this.state.user.phone}</p>
                </div>
                <div className="email-wrapper">
                  <h4>Email</h4>
                  <p>{this.state.user.email}</p>
                </div>
              </div>
              <div className="profile-information-block__content-right">
                <ModalEditProfile />
              </div>
            </div>
            <div className="club-wrapper">
              <div className="change_clubs">
                <h2>Мої &nbsp;</h2>
                <Dropdown overlay={menu}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span>гуртки </span>
                    <DownOutlined />
                  </a>
                </Dropdown>
              </div>
              <div className="button-add">
                <Dropdown overlay={menu}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <PlusOutlined />
                    <span>Додати </span>
                  </a>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
