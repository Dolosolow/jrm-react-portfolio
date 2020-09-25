import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

import Header from '../header';
import Navbar from '../navbar';
import CardList from '../cardList';

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
      <ProgressBar style={{ 
        width: animatedProgress.value.interpolate(value => `${value}%`), 
        display: animatedProgress.value.interpolate(value => value === 105 ? 'none' : 'block'),
        opacity: animatedProgress.value.interpolate(value => `${((value / 100) % 10).toFixed(2)}`)
        }} 
      />
      <Navbar />
      <Header />
      <CardList projects={[{ id: 1, name: '#fff' }, { id: 2, name: '#1db954' }, { id: 3, name: '#000' }, { id: 4, name: '#3937ff' }]} />
    </MainWrapper>
  );
}

export default App;
