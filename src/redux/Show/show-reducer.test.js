import { createStore } from "redux";
import tvmaze from "../../api/tvmaze";
import ActionTypes from "./show.types";
import rootReducer from "../root-reducer";

describe("Show reducer", () => {
  const INITIAL_STATE = {
    show: { show: {}, showEpisodes: [], cast: [] },
  };

  it("should get an array of shows for the searched id when `FETCH_SHOWS` action is dispatched", async () => {
    const store = createStore(rootReducer, INITIAL_STATE);

    const id = 1;
    const response = await tvmaze.get(`shows/${id}`);

    const action = {
      type: ActionTypes.SELECTED_SHOW,
      payload: { show: response.data },
    };
    store.dispatch(action);

    const actual = await store.getState();

    expect(actual.show.show).toEqual(response.data);
  });

  it("should get an array of the cast for the searched id when `FETCH_SHOWS` action is dispatched", async () => {
    const store = createStore(rootReducer, INITIAL_STATE);

    const id = 1;
    const response = await tvmaze.get(`shows/${id}/cast`);

    const action = {
      type: ActionTypes.FETCH_CAST,
      payload: { cast: response.data },
    };
    store.dispatch(action);

    const actual = await store.getState();

    expect(actual.show.cast).toEqual(response.data);
  });

  it("should get an array of the shows episode for the searched id when `FETCH_SHOW_EPISODES` action is dispatched", async () => {
    const store = createStore(rootReducer, INITIAL_STATE);

    const id = 1;
    const response = await tvmaze.get(`shows/${id}/episodes`);

    const action = {
      type: ActionTypes.FETCH_SHOW_EPISODES,
      payload: { showEpisodes: response.data },
    };
    store.dispatch(action);

    const actual = await store.getState();

    expect(actual.show.showEpisodes).toEqual(response.data);
  });
});
