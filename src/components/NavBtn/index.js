import React from 'react';
import {Link} from 'react-router-dom';
import './NavBtn.scss';

const NavBtn = props => {
  return (
    <Link to="/menu">
      <div className="NavBtn">
        <div className="NavBtn__single"></div>
        <div className="NavBtn__single"></div>
        <div className="NavBtn__single"></div>
      </div>
    </Link>
  )
}
export default NavBtn;