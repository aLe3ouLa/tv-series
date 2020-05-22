import SearchActionTypes from "./search.types";
import tvmaze from "../../api/tvmaze";

export const setSearchTerm = (term) => (dispatch) => {
  return dispatch({
    type: SearchActionTypes.SEARCH_VALUE,
    payload: { searchTerm: term },
  });
};

export const fetchShows = () => async (dispatch, getState) => {
  const { searchTerm } = getState().search;

  const response = await tvmaze.get(`search/shows?q=${searchTerm}`);

  return dispatch({
    type: SearchActionTypes.FETCH_SHOWS,
    payload: response.data,
  });
};
