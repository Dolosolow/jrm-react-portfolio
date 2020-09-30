import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const StyledButton = styled.button`
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

const ToTopButton = props => {
  const [show, setShow] = useState(false);

  useLayoutEffect(() => {
    function updatePosition() {
      if(window.pageYOffset > 90 && window.outerWidth > 1360) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
    window.addEventListener('scroll', updatePosition);
    window.addEventListener('resize', updatePosition);
    updatePosition();
    
    return () => {
      window.removeEventListener('scroll', updatePosition)
      window.removeEventListener('resize', updatePosition)
    };
  }, [show]);

  return (
    <StyledButton $show={show}>
      <a href="#top">
        <FontAwesomeIcon icon={faChevronUp} size="2x" />
      </a>
    </StyledButton>
  )
};

export default ToTopButton;