import React, { useState, useEffect } from 'react';
import { useSpring } from 'react-spring';
import { MainWrapper, ProgressBar, SectionDivider } from './styles';

import Header from 'components/header';
import Navbar from 'components/navbar';
import CardList from 'components/cardList';
import AboutContainer from 'components/aboutContainer';
import Footer from 'components/footer';
import ToTopButton from 'components/toTopButton';

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