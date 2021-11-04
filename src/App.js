import React from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/footer/Footer';

import Header from './Components/header/header';
import MainPage from './Components/mainPage/mainPage';
import { LeftSearch } from './Components/left_side_search/left_side_search';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <LeftSearch />
    

      </div>
      <Switch>
        <Route path="/" exact component={() => (<MainPage/ >)} />
        <Route path="/clubs" component={() => (<div>Clubs Route</div>)} />
        <Route path="/challenge" component={() => (<div>Clubs Challenge</div>)} />
        <Route path="/about" component={() => (<div>About Route</div>)} />
        <Route path="/service" component={() => (<div>Service Route</div>)} />
        <Route component={() => (<div>Not found Route</div>)} />
      </Switch>
      <Footer />

    </Router>
   
  );
}

export default App;
