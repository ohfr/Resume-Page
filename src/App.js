import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Dashboard from './Components/Dashboard';
import Projects from './Components/Projects';
import Home from './Components/Home';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Dashboard />
        <Route exact path= '/' component={Home} />
        <Route path='/Projects' component={Projects} />
      </div>
    )
  }
}