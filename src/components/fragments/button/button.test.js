import React from "react";
import Button from "./";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Button component", () => {
  const mockProps = {
    onClick: jest.fn(),
  };
  afterEach(cleanup);


  it("section have a button element", async () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Button {...mockProps} />
        </BrowserRouter>
      </ThemeProvider>
    );
    const button = getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should be able to clicked", async () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Button {...mockProps} />
        </BrowserRouter>
      </ThemeProvider>
    );
    const button = getByRole("button");
    fireEvent.click(button);
  });
});
