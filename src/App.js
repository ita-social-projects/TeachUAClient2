import React from 'react';


//import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/footer/Footer';

import Header from './Components/header/header';

import Registration from './Components/registration/Registration';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
       
        <Footer />
       

 
      </div>
      <Switch>
        <Route path="/" exact component={() => (<div>Main Route</div>)} />
        <Route path="/clubs" component={() => (<div>Clubs Route</div>)} />
        <Route path="/challenge" component={() => (<div>Clubs Challenge</div>)} />
        <Route path="/about" component={() => (<div>About Route</div>)} />
        <Route path="/service" component={() => (<div>Service Route</div>)} />
        <Route component={() => (<div>Not found Route</div>)} />
      </Switch>
      <Registration/>
    </Router>
   
  );
}

export default App;
