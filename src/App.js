import React from "react";
import './App.css';
import Slider from './Components/Slider/Slider';
import AboutUs from './Components/AboutUs/AboutUs';
import Information from './Components/Information/Information';
import GroupDirection from './Components/GroupDirection/GroupDirection';
import Footer from './Components/Footer/Footer';
import News from './Components/News/News';



function App() {
  return (
    <div className="App" style={{backgroundImage: 'url(/static/images/Background.png)'}}>
      <Slider/>
      <AboutUs/>
      <Information props={{url:"url(/static/images/about/challenge.png)",article:"Про челендж Навчай українською",
      text:"Ми допоможемо вам перейти на українську мову викладання. Тут ви можете знайти мотиваційні та практичні вебінари з експертами, корисні матеріали, які вдосконалять ваші знання та навички викладати українською.",
      btnText:"Переглянути матеріали"}}/>
      <GroupDirection/>
      <News />
      <Information props={{url:"url(/static/images/about/challenge_2.png)",article:"Челендж “Навчай українською”",
      text:"Близько тисячі учасників з усієї України уже взяли участь у 21-денному челенджі “Навчай українською” для закладів позашкільної освіти, які переходять на українську мову навчання. У листопаді 2020 року на українську мову викладання перейшло близько пів сотні гуртків. Ми підготували матеріали для тих, хто хоче перейти на українську.",
      btnText:"Дізнатись більше"}}/>
      <Footer/>
    </div>
  );
}

export default App;
