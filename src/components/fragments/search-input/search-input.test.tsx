import SearchInput from "./search-input";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles";
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Search Input component", () => {
  afterEach(cleanup);

  it("should have an input element", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <SearchInput />
        </BrowserRouter>
      </ThemeProvider>
    );
    expect(getByTestId("input-field")).toBeInTheDocument();
  });
});
