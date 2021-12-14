import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {items} from "./WebinarItems";
import { Button } from "antd";
import FacebookOutlined from "@ant-design/icons/lib/icons/FacebookOutlined";
import YoutubeOutlined from "@ant-design/icons/lib/icons/YoutubeOutlined";
import InstagramOutlined from "@ant-design/icons/lib/icons/InstagramOutlined";
import MailOutlined from "@ant-design/icons/lib/icons/MailOutlined";
import PropTypes from 'prop-types'

export default class teachUkrainian extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                  <div className="social-info">
            <div className="social-media">
                <span className="text">Наші контакти</span>
                <div className="links">
                    <a target="_blank" href=""></a>
                    <a target="_blank" href="https://www.facebook.com/teach.in.ukrainian"><FacebookOutlined
                        className="icon"/></a>
                    <a target="_blank"
                       href="https://www.youtube.com/channel/UCP38C0jxC8aNbW34eBoQKJw"><YoutubeOutlined
                        className="icon"/></a>
                    <a target="_blank" href="https://www.instagram.com/teach.in.ukrainian/"><InstagramOutlined
                        className="icon"/></a>
                    <a target="_blank" href="mailto:teach.in.ukrainian@gmail.com"><MailOutlined className="icon"/></a>
                </div>
            </div>
            <div className="help-button">
                <a target="blank"
                   href="https://secure.wayforpay.com/payment/s0f2891d77061">
                    <Button className="flooded-button donate-button">
                        Допомогти проєкту
                    </Button>
                </a>
            </div>
        </div>
        <div className="challenge-description">
            <div className="title">Навчання українською у дитячих гуртках, студіях та секціях є важливим</div>
            <div className="text">
                Ми разом з вами хочемо, щоб молоде покоління добре володіло і користувалось українською мовою, 
                і розуміємо, як важливо, щоб нею навчали у дитячих гуртках, студіях та секціях.
                <br /><br />
                Ви можете вдосконалити свої знання та навички, щоб викладати українською мовою, 
                взявши участь у челенджі “Навчай українською”.
                <br /><br />
                Ми записали для вас мотиваційні та практичні вебінари з експертами, зібрали корисні матеріали та придумали цікаві завдання. 
                Завдяки челенджу “Навчай українською” перехід на українську мову викладання стане для вас комфортним.
                <br /><br />
                Близько двох тисяч учасників з усієї України уже взяли участь у двох 21-денних челенджах “Навчай українською” 
                для закладів позашкільної освіти, які переходять на українську мову навчання. 
                Перший челендж відбувся у листопаді 2020 року. Тоді на українську мову викладання перейшло близько пів сотні гуртків. 
                Другий челендж відбувся у квітні 2021 року. Тисяча викладачів із Києва, Харкова, Дніпра, Одеси, 
                Запоріжжя та інших міст отримали необхідні знання та навички, щоб перейти на українську мову викладання.
                <br /><br />
                Ви можете переглянути вебінари, які допоможуть вам у переході на українську мову викладання.
                <br />
                <div>
                {/* {items.map(item => <ChallengeVideo item={item} />)} */}
                </div>
            </div>

        </div>
            </div>
        )
    }
}
