import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.scss';
const Footer = props => {
  return (
    <footer className="footer">
      <p className="footer__design">Design by <a href="http://filipmramor.from.hr">filip mramor</a></p>
      <p className="footer__page">2018. <Link to="/">dfusic.xyz</Link></p>
    </footer>
  );
}

export default Footer;