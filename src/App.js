import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/header/header';
import MainPage from './Components/mainPage/mainPage';
import Clubs from './Components/clubs/clubs';
import Profile from './Components/profile/profile';
import AdministrationCategories from './Components/administrationMenu/categories/administration_categories';
import AdministrationContacts from './Components/administrationMenu/contacts/administration_contacts';
import AdministrationUsers from './Components/administrationMenu/users/administration_users';
import AdministrationImportData from './Components/administrationMenu/administrationImport/administrationImportData';
import AdministrationExportData from './Components/administrationMenu/administrationExport/administrationExport';
import Confirmation from './Components/administrationMenu/confirmation/Confirmation';
import AdministarationChangeOwner from './Components/administrationMenu/changeOwner/AdministarationChangeOwner';
import AdministrationSities from './Components/administrationMenu/sities/AdministrationSities';
import AdministrationDistricts from './Components/administrationMenu/district/AdministrationDistrict';
import AdministrationStation from './Components/administrationMenu/station/AdministrationStation';
import ChallengeUA from './Components/сhallenge/challengeUA';
import ChallengeUATaskPage from './Components/сhallenge/challengePage'
import Marathon from './Components/сhallenge/marathonDay';
import MarathonPage from './Components/сhallenge/marathonPage';
import TeachUkrainian from './Components/сhallenge/teachUkrainian';
import TableFaq from './Components/administrationMenu/administrationFaq/TableFaq';
import VerifyPage from './Components/registration/VerifyPage';
import { createBrowserHistory } from "history";
import  {ShowAdvancedSearchContext}  from "./Components/context";

const history = createBrowserHistory();

class App extends Component {
  state = {
    isSearchFilterEnabled: false,
    inputValue: " "
  };

  change = (e) => {
        
    this.setState({inputValue: e.target.value})
  };

  toggleSearchFilter = () => {
    this.setState({ isSearchFilterEnabled: !this.state.isSearchFilterEnabled });
  };

  render() {
    
    return (
      <ShowAdvancedSearchContext.Provider
        value={{
          inputValue: this.state.inputValue,
          change: this.change,
          isSearchFilterEnabled: this.state.isSearchFilterEnabled,
          toggleSearchFilter: this.toggleSearchFilter,
        }}
      >
        
        <Router history={history}>
          <Header toggleSideSearch={this.toggleSideSearch} />
          <Switch>
            <Route path="/" exact component={() => <MainPage />} />
            <Route path="/clubs">
               <Clubs inputValue={this.state.inputValue} />
            </Route>

            <Route path="/challengeUA" exact component={ChallengeUA} />
            <Route path="/challengeUA/task/:pathUrl" component={ChallengeUATaskPage} />
            <Route path="/marathon" exact component={Marathon} />
            <Route path="/marathon/task/:pathUrl" component={MarathonPage} />
            <Route path="/challenge" component={() => <div>Clubs Challenge</div>}/>
            <Route path="/about" component={() => <div>About Route</div>} />
            <Route path="/service" component={() => <div>Service Route</div>} />
            <Route path="/profile" component={() => <Profile />} />
            <Route path="/dev/verify"  component={()=>(<VerifyPage/>)}/>
            <Route path="/dev/admin/categories" component={() => <Administration_categories />} />
            <Route path="/dev/admin/contacts"   component={() => <Administration_contacts />}   />
            <Route path="/dev/admin/users" component={() => <Administration_users />} />
            <Route path="/dev/admin/import-database" component={() => <AdministrationImportData />} />
            <Route path="/dev/admin/export-database" component={() => <AdministrationExportData />} />
            <Route path="/dev/admin/questions" component={() => <TableFaq />} />
            <Route path="/dev/admin/confirmation" component={() => <Confirmation />} />
            <Route path="/dev/admin/changeOwner" component={() => <AdministarationChangeOwner />} />
            <Route path="/dev/admin/sities" component={() => <AdministrationSities />} />
            <Route path="/dev/admin/districts" component={() => (<AdministrationDistricts/>)} />
            <Route path="/dev/admin/station"  component={() => (<AdministrationStation/>)}  />
            <Route component={() => <div>Not found Route</div>} />
          </Switch>
          <Footer />
        </Router>
      </ShowAdvancedSearchContext.Provider>
    );
  }
}

export default App;
