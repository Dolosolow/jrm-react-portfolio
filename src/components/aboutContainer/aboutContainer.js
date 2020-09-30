import React from 'react';
import styled from 'styled-components';
import { StyledText, LayoutLimiter } from 'styles/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faCodepen, faFigma } from '@fortawesome/free-brands-svg-icons';

const LayoutAboutLimiter = styled(LayoutLimiter)`
  margin: 10rem 0;

  @media only screen and (max-width: ${750/16}em) {
    margin: 6rem 0;
  }
`;

const StyledAboutText = styled(StyledText)`
  @media only screen and (max-width: ${750/16}em) {
    margin: 3rem 0;
  }
`;

const StyledSection = styled.div`
  /* border: 1px solid red; */
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

const StyledIconContainer = styled.div`
  /* border: 1px solid blue; */
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

const SocialLinkWrapper = styled.div`
  align-self: flex-end;
  /* border: 1px solid gold; */
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

const AboutContainer = props => {
  return (
    <LayoutAboutLimiter  $flexDirection='column' $width='70%'>
      <StyledSection>
        <h2>About me</h2>
        <StyledAboutText>
        Hello! I'm Jose, a software engineer based in Jersey City, NJ. Well organized person, problem solver, with strong
        attention to detail.<br/><br/>My goal is to keep learning and become better than I was yesterday so the products I build are well designed ensuring a great experience for the end user.
        <br/><br/>This interest in programming came in at a young age, with the release of the 1st gen iPod touch. Seeing what
        people were making with it had me hooked. I used my friend google, and started learning C and Objective-C.
        <br/><br/>Fast forward, from interest to hobby it grew. Now here in the web, I enjoy building things that live on the internet, from websites and applications, to anything in between. 
        </StyledAboutText>
      </StyledSection>
      <StyledSection>
        <h2>Contact me</h2>
        <SocialLinkWrapper>
          <StyledIconContainer>
            <a href="/">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faCodepen} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faFigma} />
            </a>
          </StyledIconContainer>
          <p>Jose.Munoz07c@gmail.com</p>
        </SocialLinkWrapper>
      </StyledSection>
    </LayoutAboutLimiter>
  )
};

export default AboutContainer;