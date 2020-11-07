import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import WestfordPage from './pages/westford/westford.component';
import AboutPage from './pages/about-us/about-us.component';
import ContactPage from './pages/contact/contact.component';
import ProgramsPage from './pages/programs/programs.component';
import GirlsScoutPage from './pages/girls-scout/girls-scout.component';
// import Classes from './pages/classes/classes.component';
// import Programs from './pages/programs/programs.component';
//import Camps from './camps.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/westford' component={WestfordPage} />
        {/* <Route path='/classes' component={Classes} />
        <Route path='/programs' component={Programs} /> */}
        {/* <Route path='/camps' component={Camps} /> */}
        <Route path='/about-us' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/programs' component={ProgramsPage} />
        <Route path='/girls-scout' component={GirlsScoutPage} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
