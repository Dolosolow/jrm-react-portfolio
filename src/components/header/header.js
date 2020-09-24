import React from 'react';
import styled from 'styled-components';
import { animateSvgPath } from 'styles/styledKeyframes';
import BgVideo from 'assets/vid/bg_vid.mp4';
import BgWave from 'assets/svg/bg-wave.svg';
import LogoSprite from 'assets/svg/bg_sprite.svg';

const StyledHeader = styled.header`
  height: 130vh;
  position: relative;
  margin-bottom: -2rem;
  width: 100%;
  z-index: 0;

  ::after {
    content: url(${BgWave});
    display: inline-block;
    position: absolute;
    bottom: 1.2rem;
    width: 100%;
  }

  video {
    height: 100%;
    opacity: 0.1;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  div {
    animation-name: ${animateSvgPath};
    height: 25rem;
    position: absolute;
    top: 20rem;
    right: 30rem;
    transform: scale(1.2);
    width: 100%;

    &.path-shifter {
      animation-duration: 2300ms;
      animation-timing-function: steps(138);
      animation-fill-mode: forwards;
      background-image: url(${LogoSprite});
      background-repeat: no-repeat;
      height: 287px;
      width: 277px;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <video autoPlay loop muted>
        <source src={BgVideo} type="video/mp4"/>
      </video>
      <div className="path-shifter" />
    </StyledHeader>
  )
}

export default Header;