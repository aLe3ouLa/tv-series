import { createStore } from "redux";
import tvmaze from "../../api/tvmaze";
import ActionTypes from "./episodes.types";
import rootReducer from "../root-reducer";

describe("Episodes reducer", () => {
  const INITIAL_STATE = {
    episode: {},
  };
  it("should get the correct episode state for the episode with id 1 when `FETCH_EPISODE` action is dispatched", async () => {
    const store = createStore(rootReducer, INITIAL_STATE);

    const response = await tvmaze.get(`episodes/1`);
    const action = {
      type: ActionTypes.FETCH_EPISODE,
      payload: response.data,
    };
    store.dispatch(action);

    const actual = await store.getState();

    expect(actual.episode).toEqual(response.data);
  });
});
