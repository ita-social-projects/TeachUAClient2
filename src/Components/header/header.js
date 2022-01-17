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
import Loaction from "../header_img/down-arrow.svg";
import Lens from "../header_img/lens.svg";
import Toggle from "../header_img/toggle.svg";
import menuIcon from "../header_img/menu.svg";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./header.scss";




export class header extends Component {
  logout = () => {
    localStorage.removeItem("accessToken");
    window.location.reload();
  }

  isAutorezed = () => {
    return localStorage.getItem("accessToken") !== null;
  };

  state = {
    city: [],
    citySelect: "Київ",
    inputValue: " ",
  };

  
  change = (e) => {
        console.log(e.target.value);
      this.setState({inputValue: e.target.value})
    };
  

  componentDidMount() {
    fetch("https://speak-ukrainian.org.ua/dev/api/cities")
      .then((response) => response.json())
      .then((cityList) => {
        this.setState({ city: cityList });
      });
        
  }
  showBtn = () => {
    return this.props.location.pathname !== '/clubs';
      }

    func = () => {
      console.log(this.state);
    }

  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <Link to="/challengeUA">Навчай українською Челендж</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/marathon">Мовомаратон</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/teachUkrainian"> Про челендж </Link>
        </Menu.Item>
      </Menu>
    );
    
    const log =  (
      <Menu>
        <Menu.Item>
          <Registration />
        </Menu.Item>
        <Menu.Item>
          <Login />
        </Menu.Item>
        <Menu.Item>
          <AddCenter />
        </Menu.Item>
        <Menu.Item>
          <Link to="/profile">Профіль </Link>
        </Menu.Item>
        <Menu.Item>
          <AddClub />
        </Menu.Item>
        <Menu.Item>
          <AdministrationMenu />
        </Menu.Item>
      </Menu>
    );

    const cities = (
      <Menu
        onClick={(e) => {
          this.setState({ citySelect: e.key });
        }}
      >
        {this.state.city.map((city) => (
          <Menu.Item key={city.name}>{city.name}</Menu.Item>
        ))}
      </Menu>
    );
    let caption = 'Ініціатива "Навчай українською"';
    let path = this.props.location.pathname;
    if (path == "/clubs") {
      caption = `Гуртки у місті ${this.state.citySelect}`;
    }


    return (
      <div className="Header">
        <div className="wrapper">
          <Link to="/">
            <img className="logo" src={Logo} />
          </Link>
          <div className="Menu">
            <label className="burger-icon" htmlFor="burger-checkbox">
              <img src={menuIcon} />
            </label>
            <input type="checkbox" id="burger-checkbox" />
            <nav>
              <Link to="/clubs">
                <img src={ProjectIcon} />
                Гуртки
              </Link>
              <Dropdown overlay={menu}>
                <a className="challenge">
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
              <Dropdown
                overlay={cities}
                onClick={(e) => {
                  console.log(e.target.value);
                }}
              >
                <img src={Loaction} />
              </Dropdown>
              <button className="city">{this.state.citySelect}</button>
            </div>
            <button className="GroupDirection__btn">Додати гурток</button>
            <div className="avatar">
            <Dropdown overlay={log}>
                <img src={Avatar} />
            </Dropdown>
            </div>
          </div>
        </div>
        <div className="LowerWrappper">
          <div className="leftElement">
            <p className="caption">{caption}</p>
            <button className="ShowMap__btn" style={{display: this.showBtn()? "none":"flex"}}> Показати на мапі</button>
          </div>
          <div className="search">
            <div className="input-field">
              <div className="search-bar">
                <Link to={{ pathname: "/clubs"}}>
                  <input
                    className="searchField"
                    type="text"
                    placeholder="Який гурток шукаєте?"
                    onChange={this.change}
                  />
                </Link>
                <img src={Lens} />
              </div>
            </div>
            <div className="litle-toggle">
              <Link>
                <img
                  className="toggle"
                  src={Toggle}
                  onClick={this.props.toggleSideSearch}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

header.propTypes = {
  toggleSideSearch: PropTypes.func,
  location: PropTypes,
  
};



export default withRouter(header);
