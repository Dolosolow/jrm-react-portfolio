import React, { useState, useEffect } from 'react';
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
    outline: ${({ enableFocus }) => enableFocus ? 1 : 0};
  }
`;  

const App = () => {
  const [enableFocus, setEnableFocus] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', evt => {
      setEnableFocus(true);
    });

    document.addEventListener('mousedown', evt => {
      setEnableFocus(false);
    });
  }, []);

  return (
    <MainWrapper enableFocus={enableFocus}>
      <Navbar />
      <Header />
      <CardList />
    </MainWrapper>
  );
}

export default App;
