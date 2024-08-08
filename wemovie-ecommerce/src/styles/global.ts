import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  // font-size: 16px (Desktop)
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }
  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  button, a {
    cursor: pointer;
  }
  button {
    color: ${({ theme }) => theme.colors.blue100};
    text-decoration: none;
    transition: 0.5s;
  }
  button:hover {
    color: ${({ theme }) => theme.colors.blue200};
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
