import React from 'react';
import {Link} from 'react-router-dom'
import './Intro.scss';
const Intro = props => {

  return(
    <div className="Intro">
      <h1 className="Intro__title">Đuro <span className="Intro__title-shifted">Fusić</span></h1>
      <div className="Intro__desc">
        <h3 className="Intro__desc__title">Developer</h3>
        <p className="Intro__desc__para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolor expedita exercitationem, optio officiis cupiditate, placeat molestiae nam quam blanditiis architecto minima. Quidem, totam tempora.</p>
        <Link to="/projects">Explore</Link>
      </div>
    </div>
  )
}

export default Intro;