import React, { Component } from 'react';
import HomePage from './HomePage';
import {Route} from 'react-router-dom';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route 
        exact
        path="/"
        component={HomePage}
        />
      </div>
    );
  }
}

export default App;