import EpisodeActionTypes from "./episodes.types";

const INITIAL_STATE = {
  episode: {},
};

const episodeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EpisodeActionTypes.FETCH_EPISODE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default episodeReducer;
