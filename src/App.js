import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React from "react";
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/header/header'
import MainPage from './Components/mainPage/mainPage'

function App() {
    return (
        <Router>
            <div className="App">
             <Header/> 
            </div>
            <Switch>
                <Route path='/' exact  component={() => (<MainPage />)}/>
                <Route path='/clubs' component={() => (<div>Clubs Route</div>)}/>
                <Route path='/challenge' component={() => (<div>Clubs Challenge</div>)}/>
                <Route path='/about' component={() => (<div>About Route</div>)}/>
                <Route path='/service' component={() => (<div>Service Route</div>)}/>
                <Route component={() => (<div>Not found Route</div>)}/>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
