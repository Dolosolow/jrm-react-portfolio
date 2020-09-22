import React from 'react';
// import BgVideo from '../../images/vid/bg_vid.mp4';
import './header.scss';

const Header = props => {
  return (
    <header className="header">
      {/* <video autoPlay loop muted>
        <source src={BgVideo} type="video/mp4"/>
      </video> */}
      <div className="header__logo shapeshifter play" />
    </header>
  )
}

export default Header;