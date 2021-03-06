import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%; //1rem = 10px / 16px = 62.5%

    @media only screen and (max-width: $bp-large){
        font-size: 50%;
    }
  }

  body {
    margin: 0 auto;
    min-width: 320px;
    overflow-x: hidden;
  }

  li {
    list-style-type: none;
  }

  a {
    cursor: pointer;
  }

  button {
    cursor: pointer;
    border: none;
  }
`;
