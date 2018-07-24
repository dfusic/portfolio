import React from 'react';
import Navigation from '../Navigation';
import Grid from '../Grid';

import './HomePage.scss';
const HomePage = props => {
  return (
    <div className="HomePage">
      <Navigation />
      <h2 className="HomePage__title">Building the web, one line of code at a time.</h2>
      <Grid />
    </div>
  );
}
export default HomePage;