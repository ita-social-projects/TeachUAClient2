import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/header/header';
import MainPage from './Components/mainPage/mainPage';
import Clubs from './Components/clubs/clubs';
import Profile from './Components/profile/profile';
import Administration_categories from './Components/administrationMenu/categories/administration_categories';
import Administration_contacts from './Components/administrationMenu/contacts/administration_contacts';
import Administration_users from './Components/administrationMenu/users/administration_users';
import { LeftSearch } from './Components/left_side_search/left_side_search';
import AdministrationImportData from './Components/administrationMenu/administrationImport/administrationImportData';
import AdministrationExportData from './Components/administrationMenu/administrationExport/administrationExport';
import Confirmation from './Components/administrationMenu/confirmation/Confirmation';
import AdministarationChangeOwner from './Components/administrationMenu/changeOwner/AdministarationChangeOwner';
import AdministrationSities from './Components/administrationMenu/sities/AdministrationSities';
import ChallengeUA from './Components/сhallenge/challengeUA';
import ChallengeUATaskPage from './Components/сhallenge/challengePage'
import Marathon from './Components/сhallenge/marathonDay';
import MarathonPage from './Components/сhallenge/marathonPage';
import TeachUkrainian from './Components/сhallenge/teachUkrainian';
import TableFaq from './Components/administrationMenu/administrationFaq/TableFaq';
import UserContext from './Components/context';



class App extends Component {
    state = {
        show: false,
        name: 'Artur',
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
                    <Route path="/" exact component={MainPage} />
                    <Route path="/clubs">
                        <UserContext.Provider value={this.state.name}>
                            <Clubs/>
                        </UserContext.Provider> 
                    </Route>
                    <Route path='/challengeUA' exact component={ChallengeUA} />
                    <Route path="/challengeUA/task/:pathUrl" component={ChallengeUATaskPage}/>
                    <Route path='/marathon' exact component={Marathon} />
                    <Route path="/marathon/task/:pathUrl" component={MarathonPage}/>
                    <Route path="/teachUkrainian" component={TeachUkrainian}/>
                    <Route path="/challenge" component={() => (<div>Clubs Challenge</div>)} />
                    <Route path="/about" component={() => (<div>About Route</div>)} />
                    <Route path="/service" component={() => (<div>Service Route</div>)} />
                    <Route path="/profile" component={() => (<Profile />)} />
                    <Route path="/dev/admin/categories" component={() => (<Administration_categories/>)} />
                    <Route path="/dev/admin/contacts" component={() => (<Administration_contacts/>)} />
                    <Route path="/dev/admin/users" component={() => (<Administration_users/>)} />
                    <Route path="/dev/admin/import-database" component={() => (<AdministrationImportData />)} />
                    <Route path="/dev/admin/export-database" component={() => (<AdministrationExportData />)} />
                    <Route path="/dev/admin/questions" component={() => (<TableFaq />)} />
                    <Route path="/dev/admin/confirmation" component={() => (<Confirmation/>)} />
                    <Route path="/dev/admin/changeOwner" component={() => (<AdministarationChangeOwner/>)} />
                    <Route path="/dev/admin/sities" component={() => (<AdministrationSities/>)} />
                    <Route component={() => (<div>Not found Route</div>)} />
                    
                </Switch>
                <Footer />
            </Router>
        );
    }
}

export default App;
