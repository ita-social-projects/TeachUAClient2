import React from "react";
import './App.css';
import Slider from './Components/Slider/Slider';
import SliderContent from './Components/Slider/SliderContent/SliderContent';
import Information from './Components/Information/Information';
import GroupDirection from './Components/GroupDirection/GroupDirection';
import Footer from './Components/Footer/Footer';
import Banner from './Components/Banner/Banner';
import 'antd/dist/antd.css';
import {Layout} from 'antd';
const {Content} = Layout;

function App() {
  return (
    <div className="App" style={{backgroundImage: 'url(/static/images/Background.png)'}}>
      <Content>
      <Slider/>
      </Content>
      <GroupDirection/>
      <Information props={{url:"url(/static/images/about/challenge_2.png)",article:"Челендж “Навчай українською”",
      text:"Близько тисячі учасників з усієї України уже взяли участь у 21-денному челенджі “Навчай українською” для закладів позашкільної освіти, які переходять на українську мову навчання. У листопаді 2020 року на українську мову викладання перейшло близько пів сотні гуртків. Ми підготували матеріали для тих, хто хоче перейти на українську.",
      btnText:"Дізнатись більше"}}/>
      <Banner />
      <Footer/>
    </div>
  );
}

export default App;
