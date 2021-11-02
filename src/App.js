import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/header/header';
import Login from './Components/login/login';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Login />
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
    </Router>
  );
}

export default App;
