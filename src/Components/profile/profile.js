import React from "react";
import "antd/dist/antd.css";
import "./profile.scss";
import logo from "./avatar.svg";
import mail from "./mail.svg";
import profile from "./Vector.svg";
import {
  DownOutlined,
  ArrowRightOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import ModalEditProfile from "../edit_profile/modal_edit_profile";

class Profile extends React.Component {
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            гуртки
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            центри
          </a>
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
        <div className="profile-information-block">
          <div className="profile-information-block__wrapper">
            <h2 className="my_profile_text">Мій профіль</h2>
            <div className="profile-information-block__card">
              <div className="profile-information-block__content-left">
                <div className="profile-information-block__name-wrapper">
                  <div className="profile-information-block__name">
                    <div className="name-wrapper">
                      <img src={logo} />
                      <div className="name">
                        <h2>Арсен Шаріфов</h2>
                        <h3>ROLE_MANAGER</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="number-wrapper">
                  <h4>Телефон</h4>
                  <p>+38 (096) 227 45 68</p>
                </div>
                <div className="email-wrapper">
                  <h4>Email</h4>
                  <p>selind.black@gmail.com</p>
                </div>
              </div>
              <div className="profile-information-block__content-right">
                <a href="#blank">
                  {" "}
                  <ModalEditProfile /> &nbsp;
                  <ArrowRightOutlined />
                </a>
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
