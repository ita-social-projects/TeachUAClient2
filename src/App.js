import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/header/header';
import MainPage from './Components/mainPage/mainPage';
import { LeftSearch } from './Components/left_side_search/left_side_search';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }

    toggleSideSearch = () => {
        this.setState({ show: !this.state.show });
    };

    render() {
        return (
            <Router>
                <div className="App">
                    <Header toggleSideSearch={this.toggleSideSearch} />
                    {this.state.show ? <LeftSearch /> : null}
                </div>
                <Switch>
                    <Route path="/" exact component={() => (<MainPage />)} />
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
}

export default App;
