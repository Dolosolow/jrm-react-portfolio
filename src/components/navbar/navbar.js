import React, { useLayoutEffect, useState } from 'react';
import './navbar.scss';

const Navbar = props => {
  const [scrollPosition, setPosition] = useState(0);

  useLayoutEffect(() => {
    function updatePosition() {
      setPosition(window.pageYOffset);
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  console.log(scrollPosition)

  return (
    <nav className={`navbar${scrollPosition <= 50 ? '' : ' slide-in-top navbar--off-right'}`}>
      <ul>
        <li className={`${scrollPosition <= 50 ? '' : 'slide-in-right'}`}>
          <a href="#projects">Projects</a>
        </li>
        <li className={`${scrollPosition <= 50 ? '' : 'slide-in-right'}`}>
          <a href="#skills">Skills</a>
        </li>
        <li className={`${scrollPosition <= 50 ? '' : 'slide-in-right'}`}>
          <a href="#aboutMe">About me</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;