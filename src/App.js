import './App.css';
import Footer from './сomponents/Footer/footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
        <Footer/>
     </div>
     <Switch>
        <Route path='/' exact component={Main}/>
        <Route path='/clubs' component={Clubs}/>
        <Route path='/challenge' component={Challenge}/>
        <Route path='/about' component={About}/>
        <Route path='/service' component={Service}/> 
        
        <Route component={NotFound}/>
        </Switch>
    </Router>
  );
}

export default App;
