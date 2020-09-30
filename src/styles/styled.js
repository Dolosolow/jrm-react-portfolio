import styled, { css } from 'styled-components';

export const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  height: max-content;
  justify-content: center;
  margin: ${({ $margin }) => $margin ? $margin : 0};
  max-width: 120rem;
  position: relative;
  width: 100%;
`;

export const LayoutLimiter = styled.div`
  ${({ $width, $flexDirection }) => {
    return css`
      flex-direction: ${ $flexDirection ? $flexDirection : 'row' };
      height: 100%;
      justify-content: 'space-around';
      max-width: 120rem;
      width: ${ $width ? $width : '100%' };

      @media only screen and (max-width: ${({ theme: { mediaPx } }) => mediaPx.tabPort / 16}em) {
        flex-direction: column;
        justify-content: flex-end;
        width: 90%;
      }
    `;
  }}
`;

export const StyledText = styled.p`
  ${({ theme: { colors }, $colored, $margin, $maxWidth }) => {
    return css`
      color: ${ $colored ? colors.primary : colors.smokedWhite };
      margin: ${ $margin ? $margin : 0};
      max-width: ${$maxWidth ? `${$maxWidth}px` : 'none' };
    `;
  }}
`;