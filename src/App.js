import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
    return (
        <Router>
            <div className="App">
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
