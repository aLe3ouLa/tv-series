import { createStore } from "redux";
import tvmaze from "../../api/tvmaze";
import ActionTypes from "./search.types";
import rootReducer from "../root-reducer";

describe("Search reducer", () => {
  const INITIAL_STATE = {
    search: { searchTerm: "", searchedShows: [] },
  };
  it("should get the correct search state for search Term 'Game of Thrones'  when `SEARCH_VALUE` action is dispatched", async () => {
    const store = createStore(rootReducer, INITIAL_STATE);

    const term = "Game of Thrones";

    const action = {
      type: ActionTypes.SEARCH_VALUE,
      payload: { searchTerm: term },
    };
    store.dispatch(action);

    const actual = await store.getState();

    expect(actual.search.searchTerm).toEqual("Game of Thrones");
  });

  it("should get an array of shows state for the searched term when `FETCH_SHOWS` action is dispatched", async () => {
    const store = createStore(rootReducer, INITIAL_STATE);

    const term = "Game of Thrones";
    const response = await tvmaze.get(`search/shows?q=${term}`);
    const action = {
      type: ActionTypes.FETCH_SHOWS,
      payload: response.data,
    };
    store.dispatch(action);

    const actual = await store.getState();

    expect(actual.search.searchedShows).toEqual(response.data);
  });
});
