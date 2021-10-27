
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from "react";
import './App.css';
import Slider from './Components/Slider/Slider';
import SliderContent from './Components/Slider/SliderContent/SliderContent';
import Information from './Components/Information/Information';
import GroupDirection from './Components/GroupDirection/GroupDirection';
import Footer from './Components/Footer/Footer';
import Header from './Components/header/header'


import Banner from './Components/Banner/Banner';
import 'antd/dist/antd.css';
import {Layout} from 'antd';
const {Content} = Layout;

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Footer />
            </div>
            <div className="App" style={{backgroundImage: 'url(/static/images/Background.png)'}}>
                <Content>
                    <Slider/>
                </Content>
                <GroupDirection/>
                <Information props={{url:"url(/static/images/about/challenge_2.png)",article:"Челендж “Навчай українською”",
                    text:"Близько тисячі учасників з усієї України уже взяли участь у 21-денному челенджі “Навчай українською” для закладів позашкільної освіти, які переходять на українську мову навчання. У листопаді 2020 року на українську мову викладання перейшло близько пів сотні гуртків. Ми підготували матеріали для тих, хто хоче перейти на українську.",
                    btnText:"Дізнатись більше"}}/>
                <Banner />
            </div>
            <Switch>
                <Route path='/' exact component={() => (<div>Main Route</div>)} />
                <Route path='/clubs' component={() => (<div>Clubs Route</div>)} />
                <Route path='/challenge' component={() => (<div>Clubs Challenge</div>)} />
                <Route path='/about' component={() => (<div>About Route</div>)} />
                <Route path='/service' component={() => (<div>Service Route</div>)} />
                <Route component={() => (<div>Not found Route</div>)} />
            </Switch>
        </Router>
    );
}

export default App;
