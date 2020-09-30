import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styled, { css } from 'styled-components';

import Header from 'components/header';
import Navbar from 'components/navbar';
import CardList from 'components/cardList';
import AboutContainer from 'components/aboutContainer';
import Footer from 'components/footer';
import ToTopButton from 'components/toTopButton';

const getSectionDivider = (position, screen = null) => {
  switch(position) {
    case 'projects':
      if(screen !== null && screen <= 950) {
        return '64.3rem';
      }
      return '68.5rem';
    case 'about':
      if(screen <= 750) {
        return '297rem';
      }
      return '245rem';
    default:
      return 0;
  };
}

const MainWrapper = styled.div`
  align-items: center;
  background: ${({ theme: { colors } }) => colors.rasinBlack};
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  position: relative;
  width: 100%;

  *:focus {
    outline: ${({ $enableFocus }) => $enableFocus ? 1 : 0};
  }
`;  

const ProgressBar = styled(animated.div)`
  background-color: #fff;
  height: 5px;
  position: fixed;
  top:0;
  left: 0;
  width: 0;
  z-index: 300;
`;

const SectionDivider = styled.span`
  ${({ $name, theme: { mediaPx } }) => {
    return css`
      /* border: 2px solid lime; */
      position: absolute;
      top: ${getSectionDivider($name)};
      z-index: 300;

      @media only screen and (max-width: ${mediaPx.tabPort / 16}em) {
        top: ${getSectionDivider($name, mediaPx.tabPort)};
      }

      @media only screen and (max-width: ${750/16}em) {
        top: ${getSectionDivider($name, 750)};
      }
    `;
  }}
`;

const App = () => {
  const [enableFocus, setEnableFocus] = useState(false);
  const animatedProgress = useSpring({
    value: 105, from: { value: 0 },
    delay: 100,
    config: { duration: 600 }
  });

  useEffect(() => {
    document.addEventListener('keydown', evt => {
      setEnableFocus(true);
    });

    document.addEventListener('mousedown', evt => {
      setEnableFocus(false);
    });
  }, []);

  return (
    <MainWrapper $enableFocus={enableFocus}>
      <SectionDivider $name='top' id="top" />
      <ProgressBar style={{ 
        width: animatedProgress.value.interpolate(value => `${value}%`), 
        display: animatedProgress.value.interpolate(value => value === 105 ? 'none' : 'block'),
        opacity: animatedProgress.value.interpolate(value => `${((value / 100) % 10).toFixed(2)}`)
        }} 
      />
      <Navbar />
      <Header />
      <SectionDivider $name='projects' id="projects" />
      <CardList projects={[{ id: 1, name: '#fff' }, { id: 2, name: '#1db954' }, { id: 3, name: '#000' }, { id: 4, name: '#3937ff' }]} />
      <AboutContainer />
      <SectionDivider $name='about' id="about" />
      <Footer />
      <ToTopButton />
    </MainWrapper>
  );
}

export default App;
