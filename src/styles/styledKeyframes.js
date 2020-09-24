import { keyframes } from 'styled-components';
// -------------------
// AnimateSvgPath
// -------------------
export const animateSvgPath = keyframes`
  0% {
    background-position: 0px 0px;
  }
  100% {
    background-position: -38226px 0px;
  }
`;
// -------------------
// slide-in-top
// -------------------
export const slideInTop = keyframes`
  0% {
  -webkit-transform: translateY(-40px);
  transform: translateY(-40px);
  /* opacity: 0; */
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    /* opacity: 1; */
  }
`;
// -------------------
// slide-out-top
// -------------------
export const slideOutTop = keyframes`
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(-40px);
    transform: translateY(-40px);
    opacity: 0;
  }
`;
// -------------------
// slide-in-right
// -------------------
export const slideInRight = keyframes`
  0% {
    -webkit-transform: translateX(40px);
    transform: translateX(40px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
`;