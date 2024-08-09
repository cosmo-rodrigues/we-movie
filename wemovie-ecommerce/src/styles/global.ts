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
    background: ${({ theme }) => theme.colors.grey800};
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    font-weight: 700;
  }
  button, a {
    cursor: pointer;
  }
  button {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    transition: 0.5s;
    border: none;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
