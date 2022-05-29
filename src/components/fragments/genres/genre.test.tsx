import { Genres } from "./genre";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles";
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Genre component", () => {
  afterEach(cleanup);

  const mockprops = {
    genres: ["test", "test2"],
  };

  it("should render genre component without crashing", () => {
    const { getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Genres genres={mockprops.genres} />
        </BrowserRouter>
      </ThemeProvider>
    );
    expect(getAllByTestId("genre-list").length).toBe(2);
  });
});
