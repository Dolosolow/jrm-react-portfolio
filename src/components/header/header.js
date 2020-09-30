import React from 'react';
import { animated } from 'react-spring';
import styled, { css } from 'styled-components';

import HeaderContent from './headerContent';

import { StyledText, StyledContainer } from 'styles/styled';

import BgVideo from 'assets/vid/bg_vid.mp4';
import BgImage from 'assets/png/bg_img.png';
import LogoSprite from 'assets/svg/bg_sprite.svg';
import { animateSvgPath } from 'styles/styledKeyframes';

export const LayoutLimiter = styled(StyledContainer)`
  height: 100%;
  justify-content: space-around;

  @media only screen and (max-width: ${({ theme: { mediaPx } }) => mediaPx.tabPort / 16}em) {
    flex-direction: column;
    justify-content: flex-end;
    width: 90%;
  }
`;

const StyledHeader = styled.header`
  background-color: ${({ theme: { colors } }) => colors.coolBlue};
  display: flex;
  justify-content: center;
  height: 72rem;
  position: relative;
  width: 100%;

  ${({ theme: { mediaPx } }) => {
    return css`
      @media only screen and (max-width: ${mediaPx.tabPort / 16}em) {
        min-height: 67.5rem;
        height: 85vh;
      }

      @media only screen and (max-width: ${750/16}em) {
        height: 75vh;;
      }
    `;
  }}

  img {
    transform: scale(1.15);
  }

  video {
    @media only screen and (max-width: ${({ theme: { mediaPx } }) => mediaPx.tabPort / 16}em) {
      display: none;
    }
  }

  video, img {
    height: 100%;
    opacity: 0.1;
    object-position: center;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  .path-shifter {
    animation-delay: 850ms;
    animation-duration: 1500ms;
    animation-fill-mode: forwards;
    animation-name: ${animateSvgPath};
    animation-timing-function: steps(138);
    background-image: url(${LogoSprite});
    background-repeat: no-repeat;
    height: 287px;
    margin-bottom: 10rem;
    transform: scale(1.2);
    width: 277px;

    ${({ theme: { mediaPx } }) => {
      return css`
        @media only screen and (max-width: ${mediaPx.tabLand / 16}em) {
          transform: scale(1);
        }

        @media only screen and (max-width: ${mediaPx.tabPort / 16}em) {
          align-self: flex-end;
          margin-right: 8rem;
          margin-bottom: 1.5rem;
          order: 1;
          transform: scale(0.9);
        }

        @media only screen and (max-width: ${mediaPx.phone / 16}em) {
          animation-delay: 0;
          animation-duration: 0;
          margin-right: 0;
          transform: scale(0.7);
        }
      `;
    }}
  }
`;

const StyledTitle = styled(animated.p)`
  color: ${({ theme: { colors }, $light }) => $light ? colors.white : colors.smokedWhite};
  font-size: 6rem;
  font-weight: 900;
  letter-spacing: -3px;

  ${({ theme: { mediaPx } }) => {
    return css`
      @media only screen and (max-width: ${mediaPx.tabPort / 16}em) {
        line-height: 1;
      }

      @media only screen and (max-width: ${mediaPx.phone / 16}em) {
        font-size: 4.5rem;
      }
    `;
  }}
`;

const AnimtedStyledText = animated(StyledText);

const Header = () => {
  return (
    <StyledHeader>
      <video autoPlay loop muted>
        <source media='(min-width: 950px)' src={BgVideo} type="video/mp4"/>
      </video>
      <picture>
        <source media="(max-width: 949px)" srcset={BgImage} />
        <img src={BgImage} alt="smoked background" />
      </picture>
      <LayoutLimiter>
        <HeaderContent>
          <AnimtedStyledText $colored={true} $margin='0 0 0.5rem 0'>Hi, my name is</AnimtedStyledText>
          <StyledTitle $light={true}>Jose Munoz</StyledTitle>
          <StyledTitle>I build things for the web</StyledTitle>
          <AnimtedStyledText $maxWidth='400' $margin='2.5rem 0'>I'm a software engineer based in Jersey City, NJ specializing in building and designing 
          high-quality websites and applications.
          </AnimtedStyledText>
        </HeaderContent>
        <div className="path-shifter" />
      </LayoutLimiter>
    </StyledHeader>
  )
}

export default Header;