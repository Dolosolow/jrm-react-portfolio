import styled, { css } from 'styled-components';

import jrLogo from 'assets/svg/logo.svg';
import { StyledContainer } from 'styles/styled';
import { slideInRight } from 'styles/styledKeyframes';

export const StyledNavContainer = styled(StyledContainer)`
  ${({ $expanded }) => {
    return css`
      ::before {
        content: url(${jrLogo});
        opacity: ${!$expanded ? 0 : 1};
        position: absolute;
        top: ${$expanded ? '1rem' : '-5rem'};
        left: 0;
        transition: all 0.3s ease-in-out;
      }
    `;
  }}
`;

export const StyledNavbar = styled.nav`
  align-items: center;
  color: ${({ theme: { colors } }) => colors.smokedWhite};
  display: flex;
  justify-content: center;
  max-height: 0;
  padding: ${({ $expanded }) => !$expanded ? '3rem 3rem 0rem 3rem' : '3rem 3rem 3rem 3rem'};
  position: fixed;
  top: 0;
  left: 0;
  transition: padding 0.3s ease-out, background-color 0.3s;
  width: 100%;
  z-index: 100;

  ul {
    display: flex;
    padding: 1.8rem;
    width: max-content;

    li {
      display: inline-block;
      margin: 0 4rem;

      a {
        color: currentColor;
        font-size: 1.4rem;

        &:hover {
          color: white;
          transition: color 0.4s ease-in-out;
        }
      }
    }
  }

  @media only screen and (max-width: ${({ theme: { mediaPx } }) => mediaPx.phone / 16}em) {
    visibility: hidden;
  }

  ${({ $expanded, theme: { mediaPx } }) => {
    if($expanded) {
      return css`
        backdrop-filter: blur(2rem);
        background-color: rgba(18, 18, 18, 0.5);
        border-bottom: 1px solid rgba(24, 27, 37, 1);

        @media only screen and (max-width: ${mediaPx.phone / 16}em) {
          padding: ${({ $expanded }) => !$expanded ? '3rem 2rem 0rem 2rem' : '3rem 2rem 3rem 2rem'};
          visibility: visible;
        }

        ul {
          justify-content: flex-end;
          padding: 1.8rem;
          width: 100%;

          li {
            -webkit-animation: ${slideInRight} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)both;
            animation: ${slideInRight} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
            margin: 0 2.2rem;
          }
        }
      `;
    }
  }}
`;