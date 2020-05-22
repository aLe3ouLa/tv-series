import { createGlobalStyle } from "styled-components";

import { color } from "../variables/colors";
import { breakpoint } from "../variables/breakpoints";

export default createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1em;
    font-family: Montserrat, sans-serif;
  }

  body,
  html {
    font-family: Montserrat, sans-serif;
    text-rendering: optimizeLegibility;
    -ms-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: none;
    -moz-osx-font-smoothing: grayscale;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  span,
  strong {
    color: ${color.text};
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${color.primary};
    font-family: inherit;
  }

  h1 {
    font-size: 3.4rem;
    font-weight: 200;
    @media (min-width: ${breakpoint.tablet}) {
      font-size: 3.6rem;
    }
    @media (min-width: ${breakpoint.desktop}) {
      font-size: 3.8rem;
    }
  }

  h2 {
    font-size: 3rem;
    font-weight: 200;
    @media (min-width: ${breakpoint.tablet}) {
      font-size: 3.2rem;
    }
    @media (min-width: ${breakpoint.desktop}) {
      font-size: 3.6rem;
    }
  }

  h3 {
    font-size: 2.4rem;
    @media (min-width: ${breakpoint.tablet}) {
      font-size: 2.6rem;
    }
    @media (min-width: ${breakpoint.desktop}) {
      font-size: 2.8rem;
    }
  }

  h4 {
    font-size: 2rem;
    font-weight: 900;
    @media (min-width: ${breakpoint.tablet}) {
      font-size: 2.2rem;
    }
    @media (min-width: ${breakpoint.desktop}) {
      font-size: 2.5rem;
    }
  }

  h5 {
    font-size: 1.8rem;
    @media (min-width: ${breakpoint.tablet}) {
      font-size: 2rem;
    }
  }

  h6 {
    font-size: 1.6rem;
    font-weight: 900;
    @media (min-width: ${breakpoint.tablet}) {
      font-size: 1.9rem;
    }
  }

  p, textarea, a, span {
    font-family: Montserrat, sans-serif;
    font-size: 1.4rem;
    @media (min-width: ${breakpoint.desktop}) {
      font-size: 1.6rem;
    }
  }

  input {
    font-size: 1.4rem;
  }

  a {
    text-decoration: none;
    &:hover {
      color: lighten(${color.accent}, 30%);
    }
  }

  button {
    font-family: inherit;
  }
`;
