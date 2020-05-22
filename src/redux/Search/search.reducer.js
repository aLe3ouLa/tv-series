import SearchActionTypes from "./search.types";

const INITIAL_STATE = {
  searchTerm: "",
  searchedShows: [],
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchActionTypes.SEARCH_VALUE:
      return { ...state, ...action.payload };
    case SearchActionTypes.FETCH_SHOWS:
      return { ...state, searchTerm: "", searchedShows: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
