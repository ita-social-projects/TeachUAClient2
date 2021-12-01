import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
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
            Категорії
          </Menu.Item>
          <Menu.Item className="sub-menu-administration" key="5">
            Контакти
          </Menu.Item>
          <Menu.Item className="sub-menu-administration" key="6">
            Користувачі
          </Menu.Item>
          <Menu.Item className="sub-menu-administration" key="7">
            FAQ
            <Link to="dev/admin/questions" />
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
            Підтвердження
          </Menu.Item>
          <Menu.Item className="sub-menu-administration" key="11">
            Зміна власника
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
