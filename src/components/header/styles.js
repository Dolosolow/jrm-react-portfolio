import { animated } from 'react-spring';
import styled, { css } from 'styled-components';
import { StyledText, StyledContainer } from 'styles/styled';

import LogoSprite from 'assets/svg/bg_sprite.svg';
import { animateSvgPath } from 'styles/styledKeyframes';
// --------------------
// Header
// --------------------
export const LayoutLimiter = styled(StyledContainer)`
  height: 100%;
  justify-content: space-around;

  @media only screen and (max-width: ${({ theme: { mediaPx } }) => mediaPx.tabPort / 16}em) {
    flex-direction: column;
    justify-content: flex-end;
    width: 90%;
  }
`;

export const StyledHeader = styled.header`
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
    opacity: 1;
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

export const StyledTitle = styled(animated.p)`
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

export const AnimtedStyledText = animated(StyledText);
// --------------------
// Header Content
// --------------------
export const StyledHeaderContent = styled(animated.div)`
  align-self: flex-end;
  margin-bottom: 5rem;

  @media only screen and (max-width: ${({ theme: { mediaPx } }) => mediaPx.tabPort / 16}em) {
    align-self: flex-start;
    margin-top: -1.5rem;
    margin-bottom: 3rem;
    order: 2;
  }
`;