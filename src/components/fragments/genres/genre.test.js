import React from "react";
import Genres from "./";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles";
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Genre component", () => {
  afterEach(cleanup);

  const mockprops = {
    genres: ["test"],
  };

  it("should render genre component without crashing", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Genres {...mockprops} />
        </BrowserRouter>
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it("should render genre component without crashing", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Genres {...mockprops} />
        </BrowserRouter>
      </ThemeProvider>
    );
    expect(getByTestId("genre-list").querySelectorAll("span").length).toBe(1);
  });
});
