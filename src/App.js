import React from "react";
import SeriesDetails from "./pages/series-details";
import { BrowserRouter, Route } from "react-router-dom";
import EpisodeDetails from "./pages/episode-details";
import Search from "./pages/search";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Search} />
      <Route exact path="/shows/:id" component={SeriesDetails} />
      <Route exact path="/episodes/:id" component={EpisodeDetails} />
    </BrowserRouter>
  );
}

export default App;
