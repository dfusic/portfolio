import React from 'react';
import {NavLink} from 'react-router-dom';

import instagram from '../../assets/instagram.svg';
import github from '../../assets/github.svg';
import twitter from '../../assets/twitter.svg';

import './Navigation.scss';
const Navigation = () => {
  return(
    <nav className="Navigation">
      <div className="Navigation__left">
      <h1 className="Navigation__name">Đuro Fusić</h1>
        <ul className="Navigation__linklist">
          <li className="Navigation__linklist__listitem">
            <NavLink to="/" activeClassName="active" >Projects</NavLink>
          </li>
          <li className="Navigation__linklist__listitem">
            <NavLink to="/about" activeClassName="active" >About</NavLink>
          </li>
          <li className="Navigation__linklist__listitem">
            <NavLink to="/contact" activeClassName="active" >Contact</NavLink>
          </li>
        </ul>
      </div>
      <ul className="Navigation__socialmedialist">
        <li className="Navigation__socialmedialist__item">
          <a href="https://www.instagram.com/d.fusic/">
            <img src={instagram} alt="Instagram"/>
          </a>
        </li>
        <li className="Navigation__socialmedialist__item">
          <a href="https://github.com/dfusic">
            <img src={github} alt="Github"/>
          </a>
        </li>
        <li className="Navigation__socialmedialist__item">
          <a href="https://twitter.com/dfusic">
            <img src={twitter} alt="Twitter"/>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;