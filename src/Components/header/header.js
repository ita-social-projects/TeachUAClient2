import React from "react";
import Logo from "../header_img/logo.png";
import Caption from "../header_img/caption.svg";
import Flag from "../header_img/flag.svg";
import ProjectIcon from "../header_img/projectIcon.svg";
import NewsIcon from "../header_img/newsIcon.svg";
import Crown from "../header_img/crown.svg";
import SpeakUkrainian from "../header_img/speakUkrainian.svg";
import News from "../header_img/news.svg";
import Workshop from "../header_img/workshop.svg";
import Challenge from "../header_img/challenge.svg";
import Button from "../header_img/button.svg";
import Location from "../header_img/location.svg";
import City from "../header_img/city.svg";
import "./header.scss";

import { Menu, Dropdown } from "antd";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

function header() {
  return (
    <div className="Header">
      <div className="Heading">
        <div className="first-child">
          <div className="logo">
            <a href="#blank">
              <img src={Logo} />
            </a>
          </div>
          <nav className="Menu">
            <a href="clubs">
              <img src={ProjectIcon} />
              <img src={Workshop} />
            </a>
            <Dropdown overlay={menu}>
              <a className="challenge" href="#blank">
                <img src={Crown} />
                <img src={Challenge} />
              </a>
            </Dropdown>
            <a className="news" href="#blank">
              <img src={NewsIcon} />
              <img src={News} />
            </a>
            <a className="project" href="#blank">
              <img src={Flag} />
              <img src={SpeakUkrainian} />
            </a>
          </nav>
        </div>
        <div className="second-child">
          <img src={Location} />
          <Dropdown overlay={cities}>
            <img className="city" src={City} />
          </Dropdown>
          <a href="#blank">
            <img src={Button} />
          </a>
          <Dropdown overlay={log}>
            <Avatar size={48} icon={<UserOutlined />} />
          </Dropdown>
        </div>
      </div>

      <div className="Heading1">
        <div className="caption">
          <img src={Caption} alt="caption" />
        </div>
        <div className="search">
          <input type="text" placeholder="Який гурток шукаєте?"></input>
        </div>
        </div>
  </div>
      );
}

const menu = (
  <Menu>
    <Menu.Item>
      <a target="#blank">Навчай українською Челендж</a>
    </Menu.Item>
    <Menu.Item>
      <a target="#blank">Мовомаратон</a>
    </Menu.Item>
    <Menu.Item>
      <a target="#blank">Навчай українською</a>
    </Menu.Item>
  </Menu>
);

const cities = (
  <Menu>
    <Menu.Item>
      <a target="#blank">Київ</a>
    </Menu.Item>
    <Menu.Item>
      <a target="#blank">Харків</a>
    </Menu.Item>
    <Menu.Item>
      <a target="#blank">Дніпро</a>
    </Menu.Item>
    <Menu.Item>
      <a target="#blank">Одеса</a>
    </Menu.Item>
    <Menu.Item>
      <a target="#blank">Запоріжжя</a>
    </Menu.Item>
    <Menu.Item>
      <a target="#blank">Львів</a>
    </Menu.Item>
    <Menu.Item>
      <a target="#blank">Рівне</a>
    </Menu.Item>
    <Menu.Item>
      <a target="#blank">Без локації</a>
    </Menu.Item>
  </Menu>
);

const log = (
  <Menu>
    <Menu.Item>
      <a target="#blank">Зареєструватися</a>
    </Menu.Item>
    <Menu.Item>
      <a target="#blank">Увійти</a>
    </Menu.Item>
  </Menu>
);

export default header;