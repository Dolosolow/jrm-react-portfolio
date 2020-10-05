import { animated } from 'react-spring';
import styled, { css } from 'styled-components';
import Color from 'color';

export const StyledCard = styled(animated.div)`
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

  .card__title,
  .card__desc {
    user-select: none;
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

export const StyledButton = styled.button`
  height: 4.5rem;
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

        &:hover {
          background-color: transparent;
          border: 1px solid ${Color($background).isDark() ? colors.white : color.hex()};
          color: ${Color($background).isDark() ? colors.white : color.hex()};
        }
      `;
  }};
`;