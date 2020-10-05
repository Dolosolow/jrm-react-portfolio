import styled from 'styled-components';
import { StyledText, LayoutLimiter } from 'styles/styled';

export const LayoutAboutLimiter = styled(LayoutLimiter)`
  margin: 10rem 0;

  @media only screen and (max-width: ${750/16}em) {
    margin: 6rem 0;
  }
`;

export const StyledAboutText = styled(StyledText)`
  @media only screen and (max-width: ${750/16}em) {
    margin: 3rem 0;
  }
`;

export const StyledSection = styled.div`
  align-items: center;
  color: ${({ theme: { colors } }) => colors.smokedWhite};
  display: flex;
  justify-content: space-between;
  min-height: 17rem;
  width: 100%;

  @media only screen and (max-width: ${750/16}em) {
    align-items: flex-start;
    min-height: 16rem;
    flex-direction: column;
  }

  h2 {
    color: ${({ theme: { colors } }) => colors.white};
    font-size: 3rem;
    font-weight: 500;

    @media only screen and (max-width: ${750/16}em) {
      font-size: 2.5rem;
    }
  }

  p {
    font-weight: 400;
    width: 70%;

    @media only screen and (max-width: ${750/16}em) {
      width: 100%;
    }
  }
`;

export const StyledIconContainer = styled.div`
  a {
    color: currentColor !important;
    display: inline-block;
    font-size: 2.5rem;
    transition: all 0.3s ease-in-out;
    
    :not(:last-of-type) {
      margin-right: 2rem;
    }

    :hover {
      color: ${({ theme: { colors } }) => colors.primary} !important;
      transform: translateY(-0.5rem);
    }
  }
`;

export const SocialLinkWrapper = styled.div`
  align-self: flex-end;
  display: flex;
  height: 10rem;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;

  @media only screen and (max-width: ${750/16}em) {
    align-self: flex-start;
  }

  p {
    background-color: #42485c;
    border-radius: 8px;
    padding: 1rem 1.5rem;
    width: max-content;
  }
`;