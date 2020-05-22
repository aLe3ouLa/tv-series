import ShowActionTypes from "./show.types";
import tvmaze from "../../api/tvmaze";

export const fetchShow = (id) => async (dispatch) => {
  const response = await tvmaze.get(`shows/${id}`);

  return dispatch({
    type: ShowActionTypes.SELECTED_SHOW,
    payload: { show: response.data },
  });
};

export const fetchEpisodes = (id) => async (dispatch) => {
  const response = await tvmaze.get(`shows/${id}/episodes`);

  return dispatch({
    type: ShowActionTypes.FETCH_SHOW_EPISODES,
    payload: { showEpisodes: response.data },
  });
};

export const fetchCast = (id) => async (dispatch) => {
  const response = await tvmaze.get(`shows/${id}/cast`);

  return dispatch({
    type: ShowActionTypes.FETCH_CAST,
    payload: { cast: response.data },
  });
};
