import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/about/About';
import Media from './pages/Media';
import Sponsors from './pages/Sponsors';
import Design from './pages/Design';
import PastYears from './pages/about/PastYears';
// import Test from './pages/Test';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/about' exact={true} component={About}/>
          <Route path='/media' exact={true} component={Media}/>
          <Route path='/sponsors' exact={true} component={Sponsors}/>
          <Route path='/design' exact={true} component={Design}/>
          <Route path='/about/history' exact={true} component={PastYears}/>
        </Switch>
      </Router>
    )
  }
}

export default App;