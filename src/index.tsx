import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Defaults, theme } from "./styles";

import { Fragment, StrictMode } from "react";
import { App } from "./App";
import SearchContextProvider from "./context/SearchContext";
import ShowContextProvider from "./context/ShowContext";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Fragment>
          <Defaults />
          <ShowContextProvider>
            <SearchContextProvider>
              <App />
            </SearchContextProvider>
          </ShowContextProvider>
        </Fragment>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
