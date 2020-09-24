import { createGlobalStyle } from 'styled-components';

export const Theme = {
  colors: {
   black: '#121212',
   primary: '#dd457c',
   rasinBlack: '#181b25',
   white: 'rgba(255, 255, 255, 0.9)',
   smokedWhite: 'rgba(255, 255, 255, 0.4)'
  },
  fonts: {
    primaryFont: 'source-han-sans-simplified-c, sans-serif'
  },
  mediaPx: {
    bigDesktop: 2000,
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
    font-size: 62.5%;
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
    text-decoration: none;
  }

  button {
    font-family: ${Theme.fonts.primaryFont};
  }

  ul {
    list-style: none;
    margin-bottom: 0;
  }
`;

export default GlobalStyles;