import React from "react";
import ShowInformation from "./";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles";
import { render, cleanup } from "@testing-library/react";

describe("Show Information component", () => {
  const mockProps = {
    name: "test",
    rating: {
      average: 5,
    },
    image: {
      medium: "img",
    },
    summary: "<p>Sum</p>",
  };
  afterEach(cleanup);

  it("should render shows information component without crashing", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <ShowInformation {...mockProps} />
        </React.Fragment>
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it("titleWrapper should have two children", async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <ShowInformation {...mockProps} />
        </React.Fragment>
      </ThemeProvider>
    );
    const titleWrapper = getByTestId("title-wrapper");
    expect(titleWrapper.children.length).toBe(2);
  });

  it("should render a title with a value of test", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <ShowInformation {...mockProps} />
        </React.Fragment>
      </ThemeProvider>
    );

    expect(getByTestId("title").textContent).toBe("test");
  });

  it("should render an image", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <ShowInformation {...mockProps} />
        </React.Fragment>
      </ThemeProvider>
    );

    expect(getByTestId("image-id")).toBeInTheDocument();
  });

  it("should render an image with src test", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <ShowInformation {...mockProps} />
        </React.Fragment>
      </ThemeProvider>
    );

    expect(getByTestId("image-id").src).toEqual("http://localhost/img");
  });

  it("genre container should have two children", async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <ShowInformation {...mockProps} />
        </React.Fragment>
      </ThemeProvider>
    );
    const genreWrapper = getByTestId("genre-wrapper");
    expect(genreWrapper.children.length).toBe(2);
  });

  it("details container should have two children", async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <ShowInformation {...mockProps} />
        </React.Fragment>
      </ThemeProvider>
    );
    const detailsWrapper = getByTestId("details-wrapper");
    expect(detailsWrapper.children.length).toBe(2);
  });

  it("summary container should render a <p>Sum</p>", async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <ShowInformation {...mockProps} />
        </React.Fragment>
      </ThemeProvider>
    );
    const sumamry = getByTestId("summary-html");
    expect(sumamry.innerHTML).toBe("<p>Sum</p>");
  });

  it("getByTestId throws error when no matching element exists", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <ShowInformation {...mockProps} />
        </React.Fragment>
      </ThemeProvider>
    );
    expect(() =>
      getByTestId("unknown-data-testid")
    ).toThrowErrorMatchingSnapshot();
  });
});
