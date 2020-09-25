import React from 'react';
import { animated } from 'react-spring';
import styled, { css } from 'styled-components';
import Color from 'color';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const StyledCard = styled(animated.div)`
  background-color: #fff;
  border-radius: 1rem;
  color: ${ ({ $background, theme: { colors } }) => Color($background).isDark() ? `${colors.white}` : `${colors.black}` };
  display: flex;
  height: 40rem;
  overflow: hidden;
  position: relative;
  width: 100%;

  @media only screen and (max-width: ${750 / 16}em) {
    flex-direction: column;
    height: 55rem;
  }

  &:not(:last-of-type) {
    margin-bottom: 3rem;
  }

  .card__content {
    background: ${({ $background }) => `linear-gradient(90deg, ${$background} 0%, ${$background} 56%, rgba(0, 212, 255, 0) 90%)`};
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 10rem;
    width: 100%;
    z-index: 10;

    @media only screen and (max-width: ${({ theme: { mediaPx } }) => mediaPx.tabPort / 16}em) {
      padding: 10rem 5rem;
    }

    @media only screen and (max-width: ${750/16}em) {
      align-items: center;
      background: ${({ $background }) => `linear-gradient(180deg, ${$background} 0%, ${$background} 56%, rgba(0, 212, 255, 0) 90%)`};
      padding: 6rem;
      text-align: center;
    }
  }

  .card__title {
    font-size: 2.5rem;
    font-weight: 300;

    @media only screen and (max-width: ${({ theme: { mediaPx } }) => mediaPx.phone / 16}em) {
      font-size: 2rem !important;
    }

    span {
      color: ${ ({ $background, theme: { colors } }) => Color($background).isDark() ? `${colors.white}` : `${colors.black}` };
      font-weight: 500;
    }
  }

  .card__desc {
    font-size: 1.5rem;
    padding: 2.5rem 0 3.5rem 0;
    max-width: 45rem;

    @media only screen and (max-width: ${({ theme: { mediaPx } }) => mediaPx.phone / 16}em) {
      font-size: 1.3rem;
    }
  }

  .card__img {
    display: inline-block;
    position: absolute;
    right: 0;
    width: 60rem;
    z-index: 0;

    @media only screen and (max-width: ${({ theme: { mediaPx } }) => mediaPx.tabPort / 16}em) {
      opacity: 0.8;
    }

    @media only screen and (max-width: ${750/16}em) {
      bottom: -5px;
      left: 0;
      width: 100%;
    }

    @media only screen and (max-width: ${({ theme: { mediaPx } }) => mediaPx.phone / 16}em) {
      height: 25rem;
    }

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  .card__btns {
    display: flex;
    justify-content: space-between;
    width: 30rem;

    @media only screen and (max-width: ${750/16}em) {
      justify-content: space-evenly;
    }
  }
`;

const StyledButton = styled.button`
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.4rem;
  height: 4.5rem;
  text-transform: capitalize;
  text-align: center;
  transition: all 0.25s ease-in-out;
  width: 14rem;

  :focus {
    outline: ${({ $focus }) => !$focus ? 'default' : 'none'};
  }

  ${({ theme: { colors }, $background, $variant }) => {
    let color = Color($background);

    if($variant === 'outline') {
      return css`
        background-color: transparent;
        border: 1px solid ${color.isDark() ? colors.white : colors.black};
        color: ${color.isDark() ? colors.white : colors.black};

        &:hover {
          background-color: ${color.isDark() ? colors.white : colors.black};
          color: ${color.isLight() ? colors.white : colors.black};
        }
      `;
    }

    if(color.luminosity().toFixed(2) <= 0.01 || color.luminosity().toFixed(2) >= 0.95) {
      color = Color(colors.primary);
    }

    return css`
        background-color: ${color.hex() === '#DD457C' ? color.hex() : color.lighten(0.3).hex()};
        color: ${color.isDark() ? colors.white : colors.black};
        border: none;

        &:hover {
          background-color: transparent;
          border: 1px solid ${Color($background).isDark() ? colors.white : color.hex()};
          color: ${Color($background).isDark() ? colors.white : color.hex()};
        }
      `;
  }};
`;

const Card = ({ background, style: { opacity, y } }) => {
  return (
    <StyledCard $background={background} style={{ opacity, transform: y.interpolate(y => `translate3d(0,${y}px,0)`) }}>
      <div className="card__content">
        <h2 className="card__title"><span>Spotify</span>&nbsp;Mock Web App</h2>
        <p className="card__desc">
        In commodo velit metus duis interdum eu non. Nulla imperdiet pellentesque bibendum amet nulla.
        </p>
        <div className="card__btns">
          <StyledButton $background={background}>View Code</StyledButton>
          <StyledButton $background={background} $variant='outline' style={{ paddingRight: '20px'}}>
            <span>See the live</span>
            <ExitToAppIcon fontSize='large' style={{ position: 'absolute', marginLeft: '5px' }} />
          </StyledButton>
        </div>
      </div>
      <div className="card__img">
        <img src="https://images.creativemarket.com/0.1.0/ps/8725987/1820/1214/m1/fpnw/wm0/spotify-.jpg?1594828228&s=1b710ecda88c0e7d0415da75db4d6324" alt={`project`} />
      </div>
    </StyledCard>
  );
}

export default Card;