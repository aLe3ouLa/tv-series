import tvmaze from "../../api/tvmaze";
import EpisodesActionTypes from "./episodes.types";

export const fetchEpisode = (id) => async (dispatch) => {
  const response = await tvmaze.get(`episodes/${id}`);

  return dispatch({
    type: EpisodesActionTypes.FETCH_EPISODE,
    payload: response.data,
  });
};
