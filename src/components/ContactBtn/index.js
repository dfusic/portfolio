import React from 'react';
import {Link} from 'react-router-dom';
import './ContactBtn.scss';
const ContactBtn = props => {
  return (
    <div className="ContactBtn">
      <h4 className="ContactBtn__title">Lets work together!</h4>
      <Link to="/contact">Contact Me</Link>
      </div>
  );
}

export default ContactBtn;