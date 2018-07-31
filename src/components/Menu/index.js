import React from 'react';
import {Link} from 'react-router-dom';
import './Menu.scss';
const Menu = props => {
  return(
      <div className="Menu">
        <div className="container">
          <div className="Menu_close">
          <Link to="/">X</Link>
          </div>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
  );
}

export default Menu;