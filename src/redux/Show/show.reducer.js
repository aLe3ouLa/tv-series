import ShowActionTypes from "./show.types";

const INITIAL_STATE = {
  show: {},
  showEpisodes: [],
  cast: [],
};

const showReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShowActionTypes.SELECTED_SHOW:
      return { ...state, ...action.payload };
    case ShowActionTypes.FETCH_SHOW_EPISODES:
      return { ...state, ...action.payload };
    case ShowActionTypes.FETCH_CAST:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default showReducer;
