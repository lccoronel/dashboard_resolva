import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --lightGrey: #F4F4F4;
    --grey: #333;
    --lightPink: #FDE3E4;
    --white: #fff;
    --textColor: #404040;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, p {
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    line-height: 27px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
