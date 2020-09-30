import { createGlobalStyle } from 'styled-components';

export const Theme = {
  colors: {
   black: '#121212',
   coolBlue: '#2e364a',
   primary: '#dd457c',
   rasinBlack: '#181b25',
   smokedWhite: 'rgba(255, 255, 255, 0.4)',
   white: 'rgba(255, 255, 255, 0.9)'
  },
  fonts: {
    primaryFont: 'source-han-sans-simplified-c, sans-serif'
  },
  mediaPx: {
    tabLand: 1200,
    tabPort: 950,
    phone: 600
  }
}

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  ::selection {
    background-color: ${Theme.colors.primary};
    color: #fff;
  }

  html {
    background-color: #11131a;
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    box-sizing: border-box;
    font-family: ${Theme.fonts.primaryFont};
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
  }

  a,
  a:link,
  a:visited,
  a:focus,
  a:hover,
  a:active {
    color: ${Theme.colors.rasinBlack};
    text-decoration: none;
  }

  button {
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-family: ${Theme.fonts.primaryFont};
    font-size: 1.4rem;
    text-transform: capitalize;
    text-align: center;
    transition: all 0.25s ease-in-out;
  }

  ul {
    list-style: none;
    margin-bottom: 0;
  }
`;

export default GlobalStyles;