import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Retete from './components/pages/Retete';
import AboutUs from './components/pages/AboutUs';
import SignUp from './components/pages/SignUp';




function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Switch>

          <Route path='/' exact component = {Home} />
          <Route path = '/retete' component = {Retete} />
          <Route path = '/about-us' component = {AboutUs} />
          <Route path = '/sign-up' component = {SignUp} />
      </Switch>
      </Router>
      
    </>
  );
}

export default App;
