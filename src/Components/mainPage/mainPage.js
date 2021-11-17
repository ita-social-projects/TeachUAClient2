import React from "react";
import 'antd/dist/antd.css';
import "./mainPage.scss";
import Banner from './Banner/Banner';
import GroupDirection from './GroupDirection/GroupDirection';
import Information from './Information/Information';
import Slider from './Slider/Slider';


import {Layout} from 'antd';

const {Content} = Layout;

class mainPage extends React.Component {
  render() {
    return (
      <div className="mainPage" style={{ backgroundImage: "url(/static/images/Background.png)" }}>
        <Content>
          <Slider />
        </Content>
        <GroupDirection />
        <Information
          information={{
            url: "url(/static/images/about/challenge_2.png)",
            article: "Челендж “Навчай українською”",
            text: "Ми допоможемо вам перейти на українську мову викладання. Тут ви можете знайти мотиваційні та практичні вебінари з експертами, корисні матеріали, які вдосконалять ваші знання та навички викладати українською.",
            btnText: "Дізнатись більше",
          }}/>
        <Banner />
      </div>
    );
  }
}

export default mainPage;
