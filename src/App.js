import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import WestfordPage from './pages/westford/westford.component';
import JerseyPage from './pages/jerseycity/jerseycity.component';
import AboutPage from './pages/about-us/about-us.component';
import ContactPage from './pages/contact/contact.component';
import ProgramsPage from './pages/programs/programs.component';
import GirlsScoutPage from './pages/girls-scout/girls-scout.component';
import BirthdayPartiesPage from './pages/birthday-parties/birthday-parties.component';
import FindACoursePage from './pages/find-a-course/find-a-course.component';
import CampsPage from './pages/camps/camps';
import CompetitionsPage from './pages/competitions/competitions';
import TechnovationPage from './pages/technovation/technovation';
import FLLPage from './pages/fll/fll';
import FAQPage from './pages/faqs/faqs';
import LocationsPage from './pages/locations/locations';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
// import {appendScript} from './components/LoadJS';

// class App extends Component {
//   componentDidMount() {
//     const fpath = '/assets/';

//     let scripts = [
//       'js/maps.js',
//       'js/courses.js'
//     ];

//     for(let i=0; i<scripts.length; i++) {
//       const script = scripts[i];
//       appendScript(fpath+script);
//     }
//   }


//   render(){
//     return (
//       <div>
//         <Header />
//         <Switch>
//           <Route exact path='/' component={HomePage} />
//           <Route path='/westford' component={WestfordPage} />
//           {/* <Route path='/classes' component={Classes} />
//           <Route path='/programs' component={Programs} /> */}
//           {/* <Route path='/camps' component={Camps} /> */}
//           <Route path='/about-us' component={AboutPage} />
//           <Route path='/contact' component={ContactPage} />
//           <Route path='/programs' component={ProgramsPage} />
//           <Route path='/girls-scout' component={GirlsScoutPage} />
//           <Route path='/birthday-parties' component={BirthdayPartiesPage} />
//           <Route path='/classes' component={FindACoursePage} />
//         </Switch>
//         <Footer/>
//       </div>
//     );
//   }
  
// }

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/westford' component={WestfordPage} />
        <Route path='/about-us' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/programs' component={ProgramsPage} />
        <Route path='/girls-scout' component={GirlsScoutPage} />
        <Route path='/birthday-parties' component={BirthdayPartiesPage} />
        <Route path='/classes' component={FindACoursePage} />
        <Route path='/camps' component={CampsPage} />
        <Route path='/competitions' component={CompetitionsPage} />
        <Route path='/technovation' component={TechnovationPage} />
        <Route path='/fll' component={FLLPage} />
        <Route path='/faqs' component={FAQPage} />
        <Route path='/locations' component={LocationsPage} />
        <Route path='/westford-ma' component={WestfordPage} />
        <Route path='/jerseycity' component={JerseyPage} />
      </Switch>
      <Footer/>
    </div>
  );
}


export default App;
