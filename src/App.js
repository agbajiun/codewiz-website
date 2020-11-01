import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import WestfordPage from './pages/westford/westford.component';
import Classes from './pages/classes.component';
import OnlineOffering from './pages/online-offering.component';
import Programs from './pages/programs.component';
import Camps from './pages/camps.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/westford' component={WestfordPage} />
        <Route path='/classes' component={Classes} />
        <Route path='/online-offering' component={OnlineOffering} />
        <Route path='/programs' component={Programs} />
        <Route path='/camps' component={Camps} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
