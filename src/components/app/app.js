import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

import Header from 'components/header';
import Navbar from 'components/navbar';
import CardList from 'components/cardList';
import ToTopButton from 'components/toTopButton';

const MainWrapper = styled.div`
  background: #2e364a;
  overflow-x: hidden;
  height: 100%;
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
  /* remove after all section have been placed */
  /* border: 2px solid lime; */
  position: absolute;
  top: ${({ $name }) => {
    switch($name) {
      case 'top':
        return '0';
      case 'projects':
        return '68.5rem';
      default:
        return 'top';
    };
  }};
  z-index: 300;
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
      <ToTopButton />
    </MainWrapper>
  );
}

export default App;
