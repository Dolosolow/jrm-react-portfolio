import React from 'react';
import { animated } from 'react-spring';
import styled from 'styled-components';

import HeaderContent from './headerContent';

import BgVideo from 'assets/vid/bg_vid.mp4';
import LogoSprite from 'assets/svg/bg_sprite.svg';
import { animateSvgPath } from 'styles/styledKeyframes';

const StyledHeader = styled.header`
  /* border: 1px solid lime; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 90vh;
  position: relative;
  width: 100%;
  z-index: 0;

  @media only screen and (max-width: ${({ theme: { mediaPx } }) => mediaPx.tabPort / 16}em) {
    height: 85vh;
  }

  @media only screen and (max-width: ${750/16}em) {
    height: 70vh;
  }

  video {
    height: 105%;
    opacity: 0.1;
    position: fixed;
    bottom: 0;
    left: 0;
  }

  div {
    animation-name: ${animateSvgPath};
    transform: scale(1.2);
    margin-bottom: 10rem;
    transition: margin-left 0.5s;

    @media only screen and (max-width: ${({ theme: { mediaPx } }) => mediaPx.tabLand / 16}em) {
      transform: scale(1);
    }

    @media only screen and (max-width: ${({ theme: { mediaPx } }) => mediaPx.tabPort / 16}em) {
      margin-left: 35rem;
      transform: scale(0.85);
    }

    @media only screen and (max-width: ${({ theme: { mediaPx } }) => mediaPx.phone / 16}em) {
      margin-left: 0;
      transform: scale(0.5);
    }


    &.path-shifter {
      animation-delay: 850ms;
      animation-duration: 1500ms;
      animation-timing-function: steps(138);
      animation-fill-mode: forwards;
      background-image: url(${LogoSprite});
      background-repeat: no-repeat;
      height: 287px;
      width: 277px;
    }
  }
`;

const StyledText = styled(animated.p)`
  color: ${({ theme: { colors }, $colored }) => $colored ? colors.primary : colors.smokedWhite};
  font-weight: 400;
  margin: ${({ $margin }) => $margin ? $margin : 0};
  max-width: ${({ $maxWidth }) => $maxWidth ? `${$maxWidth}px` : `none`};
`;

const StyledTitle = styled(animated.p)`
  color: ${({ theme: { colors }, $light }) => $light ? colors.white : colors.smokedWhite};
  font-size: 4.5rem;
  font-weight: 900;
  letter-spacing: -3px;
`;


const Header = () => {
  return (
    <StyledHeader>
      <video autoPlay loop muted>
        <source src={BgVideo} type="video/mp4"/>
      </video>
      <HeaderContent>
        <StyledText $colored={true}>Hi, my name is</StyledText>
        <StyledTitle $light={true}>Jose Munoz</StyledTitle>
        <StyledTitle>I build things for the web</StyledTitle>
        <StyledText $maxWidth='400' $margin='2.5rem 0'>I'm a software engineer based in Jersey City, NJ specializing in building and designing 
        outstanding, high-quality websites and applications.
        </StyledText>
      </HeaderContent>
      <div className="path-shifter" />
    </StyledHeader>
  )
}

export default Header;





// const Header = () => {
//   return (
//     <StyledHeader>
//       <video autoPlay loop muted>
//         <source src={BgVideo} type="video/mp4"/>
//       </video>
//       <div className="header-content">
//         <StyledText colored={true}>Hi, my name is</StyledText>
//         <StyledTitle light={true}>Jose Munoz</StyledTitle>
//         <StyledTitle>I build things for the web</StyledTitle>
//         <StyledText maxWidth={400} margin='2.5rem 0'>I'm a software engineer based in Jersey City, NJ specializing in building and designing 
//         outstanding, high-quality websites and applications.
//         </StyledText>
//       </div>
//       <div className="path-shifter" />
//     </StyledHeader>
//   )
// }