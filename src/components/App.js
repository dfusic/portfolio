import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Homepage from './Homepage';
import Menu from './Menu';
import background from '../assets/background.jpg';
import './App.scss';

class App extends Component {
  render() {
    let appStyle = {
      background: `url(${background}) center center no-repeat fixed`,
      backgroundSize: 'cover',
    }
  
    return (
      <div className="App" style={appStyle}> 
        <Route 
        exact
        path="/"
        component={Homepage}
        />
        <Route 
        exact
        path="/menu"
        component={Menu}
        />
      </div>
    );
  }
}

export default App;
