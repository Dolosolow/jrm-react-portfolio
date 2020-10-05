import React from 'react';
import {
  LayoutAboutLimiter, 
  StyledSection, 
  StyledAboutText, 
  SocialLinkWrapper, 
  StyledIconContainer
} from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faCodepen, faFigma } from '@fortawesome/free-brands-svg-icons';

const AboutContainer = () => {
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