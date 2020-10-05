import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${({ theme: { colors } }) => colors.smokedWhite};
  display: ${({ $show }) => $show ? 'block' : 'none'};
  height: 5rem;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  transition: none;
  width: 5rem;
  z-index: 100;

  :hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;