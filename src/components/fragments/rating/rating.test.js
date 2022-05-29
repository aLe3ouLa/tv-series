import { Rating } from "./rating";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles";
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Rating component", () => {
  afterEach(cleanup);


  it("rating should have two children component", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Rating />
        </BrowserRouter>
      </ThemeProvider>
    );
    const rating = getByTestId("rating-field");
    expect(rating.children.length).toBe(2);
  });
});
