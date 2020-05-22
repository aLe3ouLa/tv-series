import { combineReducers } from "redux";
import searchReducer from "./Search/search.reducer";
import showReducer from "./Show/show.reducer";
import episodeReducer from "./Episodes/episodes.reducer";

export default combineReducers({
  search: searchReducer,
  show: showReducer,
  episode: episodeReducer,
});
