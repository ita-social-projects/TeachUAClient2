import React from "react";
import { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu } from "antd";
import Administration_categories from "./categories/administration_categories";
import Administration_contacts from "./contacts/administration_contacts";
import Administration_users from "./users/administration_users";
import "antd/dist/antd.css";
import "./administrationMenu.scss";
import AdministrationExportData from "./administrationExport/administrationExport";

const { SubMenu } = Menu;

class AdministrationMenu extends Component {
  render() {
    return (
      <Menu mode="vertical" className="menu-administration">
        <SubMenu
          key="sub_administration"
          title="Адміністрування"
          className="sub-menu-administration"
        >
          <Menu.Item className="sub-menu-administration" key="2">
            Райони
          </Menu.Item>
          <Menu.Item className="sub-menu-administration" key="3">
            Станції/Місцевості
          </Menu.Item>
          <Menu.Item className="sub-menu-administration" key="4">
          <a href="/dev/admin/categories" onClick={() => (<Administration_categories/>)}>
            Категорії
          </a></Menu.Item>
          <Menu.Item className="sub-menu-administration" key="5">
          <a href="/dev/admin/contacts" onClick={() => (<Administration_contacts/>)}>
            Контакти
          </a></Menu.Item>
          <Menu.Item className="sub-menu-administration" key="6">
          <a href="/dev/admin/users" onClick={() => (<Administration_users/>)}>
            Користувачі
          </a></Menu.Item>
          <Menu.Item className="sub-menu-administration" key="7">
            FAQ
            <Link to="/dev/admin/questions" />
          </Menu.Item>
          <Menu.Item className="sub-menu-administration" key="8">
            Імпортувати дані
            <Link to="/dev/admin/import-database" />
          </Menu.Item>
          <Menu.Item className="sub-menu-administration" key="9">
            Експортувати дані
            <Link to="/dev/admin/export-database" />
            <a href={<AdministrationExportData />} download></a>
          </Menu.Item>
          <Menu.Item className="sub-menu-administration" key="10">
            <NavLink to="/dev/admin/confirmation">Підтвердження</NavLink>
          </Menu.Item>
          <Menu.Item className="sub-menu-administration" key="11">
            <NavLink to="/dev/admin/changeOwner">Зміна власника</NavLink>
          </Menu.Item>
          <Menu.Item className="sub-menu-administration" key="1">
            Міста
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default AdministrationMenu;
