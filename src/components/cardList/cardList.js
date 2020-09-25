import React from 'react';
import { useTrail } from 'react-spring';
import styled from 'styled-components';

import Card from 'components/card';

const StyledCLContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: max-content;
  justify-content: center;
  max-width: 120rem;
  position: relative;
  width: 90%;
`;

const StyledCardList = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.rasinBlack};
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  padding-bottom: 10rem;
  position: relative;
  width: 100%;
  z-index: 5;
`;

const CardList = ({ projects }) => {
  const animatedTrails = useTrail(projects.length, {
    from: { opacity: 0, y: 60 },
    to: { opacity: 1, y: 0 },
    delay: 100,
    config: { duration: 700 }
  });
  const animatedCards = animatedTrails.map((props, idx) => (
    <Card key={projects[idx].name} background={projects[idx].name} style={props} />
  ));

  return (
    <StyledCardList>
      <StyledCLContainer>
        { animatedCards }
      </StyledCLContainer>
    </StyledCardList>
  )
};

export default CardList;