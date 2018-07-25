import React, {Component} from 'react';
import SideSocial from '../SideSocial';
import NavBtn from '../NavBtn';
import Logo from '../Logo';
import ContactBtn from '../ContactBtn';
import Footer from '../Footer';
import './Homepage.scss';

import Intro from './Intro';
class Homepage extends Component{
  render(){

    return (
      <section className="Homepage">
        <SideSocial />
          <div className="container">
            <Logo />
            <NavBtn />
            <ContactBtn />
            <Intro />
          </div>
          <Footer />
      </section>
    )
  }
}

export default Homepage;