import React from "react";
import { Component } from "react";
import { Menu } from "antd";
import "antd/dist/antd.css";
import "./administration_menu.scss";

const { SubMenu } = Menu;


class Administration_menu extends Component {
  render() {
    return (
      <Menu mode="vertical" className='menu_administration'>
        <SubMenu key="sub_administration" title="Адміністрування" className='sub_menu_administration'>
          <Menu.Item className='item_menu_administration' key="1">Міста</Menu.Item>
          <Menu.Item key="2">Райони</Menu.Item>
          <Menu.Item key="3">Станції/Місцевості</Menu.Item>
          <Menu.Item key="4">Категорії</Menu.Item>
          <Menu.Item key="5">Контакти</Menu.Item>
          <Menu.Item key="6">Користувачі</Menu.Item>
          <Menu.Item key="7">FAQ</Menu.Item>
          <Menu.Item key="8">Імпортувати дані</Menu.Item>
          <Menu.Item key="9">Експортувати дані</Menu.Item>
          <Menu.Item key="10">Підтвердження</Menu.Item>
          <Menu.Item key="11">Зміна власника</Menu.Item>
        </SubMenu>
      </Menu>



    );
  }
}

export default Administration_menu;
