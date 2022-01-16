import React, { Component } from "react";
import { Menu, Dropdown } from "antd";
import PropTypes from "prop-types";

import Login from "../login/login";
import Registration from "../registration/Registration";
import AddCenter from "../addCenter/addCenter";
import AddClub from "../add_Club/AddClub";
import AdministrationMenu from "../administrationMenu/administrationMenu";

import Logo from "../header_img/logo.png";
import Avatar from "../header_img/avatar.svg";
import ProjectIcon from "../header_img/projectIcon.svg";
import Crown from "../header_img/crown.svg";
import NewsIcon from "../header_img/newsIcon.svg";
import Flag from "../header_img/flag.svg";
import Loaction from "../header_img/location.svg";
import Lens from "../header_img/lens.svg";
import Toggle from "../header_img/toggle.svg";
import Plate from "../header_img/plate.svg";
import menuIcon from "../header_img/menu.svg";
import { Link, NavLink } from "react-router-dom";
import "./header.scss";
import ShowAdvancedSearchContext from "../context";

export class header extends Component {
  logout = () => {
    localStorage.removeItem("accessToken");
    window.location.reload();
  };

  isAuthorather = () => {
    return localStorage.getItem("accessToken") !== null;
  };

  render() {
    console.log(this.props);
    const menu = (
      <Menu>
        <Menu.Item>
          <Link to="/challengeUA">
            <a target="#blank">Навчай українською Челендж</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/marathon">
            <a target="#blank">Мовомаратон</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <a target="#blank">Навчай українською</a>
        </Menu.Item>
      </Menu>
    );

    const log = this.isAuthorather() ? (
      <Menu>
        <Menu.Item>
          <AddClub />
        </Menu.Item>
        <Menu.Item>
          <AddCenter />
        </Menu.Item>
        <Menu.Item>
          <a href="/profile">Профіль </a>
        </Menu.Item>
        <Menu.Item onClick={this.logout}>Вийти</Menu.Item>

        <Menu.Item>
          <AdministrationMenu />
        </Menu.Item>
      </Menu>
    ) : (
      <Menu>
        <Menu.Item>
          <Registration />
        </Menu.Item>
        <Menu.Item>
          <Login />
        </Menu.Item>
      </Menu>
    );
    
     return (
      <div className="Header">
        <div className="wrapper">
          <img className="logo" src={Logo} />
          <div className="Menu">
            <label className="burger-icon" htmlFor="burger-checkbox">
              <img src={menuIcon} />
            </label>
            <input type="checkbox" id="burger-checkbox" />
            <nav>
              <a href="/clubs">
                <img src={ProjectIcon} />
                Гуртки
              </a>
              <Dropdown overlay={menu}>
                <a className="challenge" href="#blank">
                  <img src={Crown} />
                  Челендж
                </a>
              </Dropdown>
              <a className="news" href="#blank">
                <img src={NewsIcon} />
                Про нас
              </a>
              <a className="project" href="#blank">
                <img src={Flag} />
                Послуги українською
              </a>
            </nav>
          </div>
          <div className="log">
            <div className="locationIcon">
              <img src={Loaction} />
              <div className="city">
                <p>Місто</p>
              </div>
            </div>
            <Dropdown overlay={log}>
              <div className="avatar">
                <img src={Avatar} />
              </div>
            </Dropdown>
          </div>
        </div>
        <div className="LowerWrappper">
          <p className="caption">Ініціатива &quot;Навчай українською&quot;</p>
          <div className="search">
            <div className="input-field">
              <div className="search-bar">
                <input type="text" placeholder="Який гурток шукаєте?"></input>
                <img src={Lens} />
              </div>
              <img className="plaate" src={Plate} />
            </div>
            <div className="litle-toggle">
              <NavLink to={"/clubs"}>
                <ShowAdvancedSearchContext.Consumer>
                  {(value) => (
                    <img
                      className="toggle"
                      src={Toggle}
                      onClick={value.toggleSearchFilter}
                    />
                  )}
                </ShowAdvancedSearchContext.Consumer>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

header.propTypes = {
  history: PropTypes.object,
};

export default header;
