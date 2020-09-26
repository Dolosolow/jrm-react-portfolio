import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

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

  console.log(window.outerWidth)

  return (
    <StyledButton $show={show}>
      <a href="#top">
        <KeyboardArrowUpIcon fontSize='large' style={{ transform: 'scale(2.5)' }} />
      </a>
    </StyledButton>
  )
};

export default ToTopButton;