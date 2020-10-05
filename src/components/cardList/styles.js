import styled from 'styled-components';
import { StyledContainer } from 'styles/styled';

export const StyledCLContainer = styled(StyledContainer)`
  flex-direction: column;
  width: 90%;
`;

export const StyledCardList = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.rasinBlack};
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  position: relative;
  width: 100%;
  z-index: 5;
`;