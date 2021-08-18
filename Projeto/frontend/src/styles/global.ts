import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    --purple: #7E02E0;
    --blue: #500AF7;
    --pink: #ED09BE;
    --light: #F3EEEE;
    --dark: #252424;
    --blueLight: #4488ED;
    --green: #4EA24E;
    --redLight: #F17070;
    --greenDark: #419563;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--light);
    color: var(--dark);
  }

  body, input, textarea, button {
    font: 400 1rem "Montserrat", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
