import React from "react";
import ShowEpisodes from "./";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles";
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Show Episodes component", () => {
  const mockProps = {
    groups: [[{ id: "1", name: "test" }], [{ id: "2", name: "test1" }]],
  };
  afterEach(cleanup);


  it("section for episodes should render two children", async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ShowEpisodes {...mockProps} />
        </BrowserRouter>
      </ThemeProvider>
    );
    const titleWrapper = getByTestId("test-1");
    expect(titleWrapper.children.length).toBe(2);
  });

  it("section for episodes has a season title", async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ShowEpisodes {...mockProps} />
        </BrowserRouter>
      </ThemeProvider>
    );
    const title = getByTestId("title-1");
    expect(title.textContent).toBe("Season 0");
  });

  it("card list has 1 children in season 0", async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ShowEpisodes {...mockProps} />
        </BrowserRouter>
      </ThemeProvider>
    );
    const title = getByTestId("card-list-1");
    expect(title.children.length).toBe(1);
  });
});
