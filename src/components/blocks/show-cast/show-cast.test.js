import React from "react";
import ShowCast from "./";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles";
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Show Cast component", () => {
  const mockProps = {
    cast: [{ person: { name: "test" }, character: { name: "test1" } }],
  };
  afterEach(cleanup);

  it("should render shows cast component without crashing", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ShowCast {...mockProps} />
        </BrowserRouter>
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it("section for episodes exists a li for a cast", async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ShowCast {...mockProps} />
        </BrowserRouter>
      </ThemeProvider>
    );
    const li = getByTestId("cast-list-0");
    expect(li).toBeInTheDocument();
  });

  it("section for cast should render an element with values test - test1", async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ShowCast {...mockProps} />
        </BrowserRouter>
      </ThemeProvider>
    );
    const cast = getByTestId("cast-list-0");
    expect(cast.textContent).toBe("test - test1");
  });
});
