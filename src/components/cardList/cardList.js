import React from 'react';
import { useTrail } from 'react-spring';
import {StyledCLContainer, StyledCardList} from './styles';

import Card from 'components/card';

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