import React from 'react';
import styled from 'styled-components';
import { StyledContainer } from 'styles/styled';
import Card from '../card';

const StyledCLContainer = styled(StyledContainer)`
  flex-direction: column;
`;

const StyledCardList = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.rasinBlack};
  display: flex;
  flex-direction: column;
  padding-bottom: 10rem;
  position: relative;
  width: 100%;
  z-index: 5;
`;

const CardList = () => {
  return (
    <StyledCardList>
      <StyledCLContainer>
        <Card background='#fff' />
        <Card background='#1db954' />
        <Card background='#000' />
        <Card background='#3937ff' />
      </StyledCLContainer>
    </StyledCardList>
  )
};

export default CardList;