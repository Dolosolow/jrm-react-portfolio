import React, { useLayoutEffect, useState } from 'react';
import { StyledContainer } from 'styles/styled';
import styled, { css } from 'styled-components';
import { slideInRight } from 'styles/styledKeyframes';
import jrLogo from 'assets/svg/logo.svg';

const StyledNavContainer = styled(StyledContainer)`
  ${({ scrollPosition }) => {
    return css`
      ::before {
        content: url(${jrLogo});
        opacity: ${scrollPosition < 50 ? 0 : 1};
        position: absolute;
        top: ${scrollPosition >= 50 ? '1rem' : '-5rem'};
        left: 0;
        transition: all 0.3s ease-in-out;
      }
    `;
  }}
`;

const StyledNavbar = styled.nav`
  align-items: center;
  color: ${({ theme: { colors } }) => colors.smokedWhite};
  display: flex;
  justify-content: center;
  height: 0;
  padding-top: 3rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.3s ease;
  width: 100%;
  z-index: 100;

  ul {
    display: flex;
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

  ${({ scrollPosition }) => {
    if(scrollPosition > 50) {
      return css`
        backdrop-filter: blur(2rem);
        background-color: rgba(18, 18, 18, 0.5);
        border-bottom: 1px solid rgba(24, 27, 37, 1);
        padding: 3rem;

        ul {
          justify-content: flex-end;
          padding: 1.8rem;
          width: 100%;

          li {
            -webkit-animation: ${slideInRight} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)both;
            animation: ${slideInRight} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
            margin: 0 2.5rem;
          }
        }
      `;
    }
  }}
`;

const Navbar = () => {
  const [scrollPosition, setPosition] = useState(0);

  useLayoutEffect(() => {
    function updatePosition() {
      setPosition(window.pageYOffset);
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return (
    <StyledNavbar scrollPosition={scrollPosition}>
      <StyledNavContainer scrollPosition={scrollPosition}>
        <ul>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#aboutMe">About</a>
          </li>
        </ul>
      </StyledNavContainer>
    </StyledNavbar>
  )
}

export default Navbar;