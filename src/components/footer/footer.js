import React from 'react';
import styled from 'styled-components';

import { StyledContainer } from 'styles/styled';

const StyledFooter = styled.footer`
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  height: 9rem;
  justify-content: center;
  width: 100%;

  @media only screen and (max-width: ${({ theme: { mediaPx } }) => mediaPx.phone / 16}em) {
    height: 8rem;
  }

  p {
    color: ${({ theme: { colors } }) => colors.smokedWhite};
    font-size: 1.2rem;
    font-weight: 300;
  }
`;

const Footer = props => {
  return (
    <StyledContainer>
      <StyledFooter>
        <p>Desgined &amp; Built by Jose Munoz</p>
      </StyledFooter>
    </StyledContainer>
  )
}

export default Footer;