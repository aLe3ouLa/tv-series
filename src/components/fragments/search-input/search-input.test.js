import React from "react";
import SearchInput from "./";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles";
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore from "redux-mock-store";
const mockStore = configureStore([]);

describe("Search Input component", () => {
  afterEach(cleanup);

  let store;
  beforeEach(() => {
    store = mockStore({
      search: { searchTerm: "test" },
    });
  });

  it("should render search-input component without crashing", () => {
    const { container } = render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <SearchInput />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it("should have an input element", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <SearchInput />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );
    expect(getByTestId("input-field")).toBeInTheDocument();
  });
});
