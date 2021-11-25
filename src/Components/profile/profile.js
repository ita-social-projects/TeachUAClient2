import React from "react";
import "antd/dist/antd.css";
import "./profile.scss";
import logo from "./avatar.svg";
import mail from "./mail.svg";
import profile from "./Vector.svg";
import { DownOutlined } from "@ant-design/icons";


class Profile extends React.Component {
  render() {
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
                <a href="#blank">Редагувати профіль &rang;</a>
              </div>
            </div>
            <div className="button_menu">
              <div className="change_clubs">
                <h2>Мої &nbsp;</h2>
                <button>
                  <span className="button_text_clubs">гуртки</span>
                  <span>
                    <DownOutlined style={{ color: "silver" }} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
