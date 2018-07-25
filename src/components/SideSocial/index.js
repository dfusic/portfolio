import React from 'react';
import './SideSocial.scss';

import github from '../../assets/github.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';

const SideSocial = props => {

  return (
    <div className="SideSocial">
      <ul className="SideSocial__list">
        <li className="SideSocial__list__item">
          <a href="https://github.com/dfusic">
            <img src={github} alt="Github"/>
          </a>
        </li>
        <li className="SideSocial__list__item">
          <a href="https://www.instagram.com/d.fusic/">
            <img src={instagram} alt="Instagram"/>
          </a>
        </li>
        <li className="SideSocial__list__item">
          <a href="https://twitter.com/dfusic">
            <img src={twitter} alt="Twitter"/>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SideSocial;