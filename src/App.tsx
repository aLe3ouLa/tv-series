import { ShowDetails } from "./pages/show-details";
import { Route, Routes } from "react-router-dom";
import EpisodeDetails from "./pages/episode-details";
import Search from "./pages/search";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/shows/:showid" element={<ShowDetails />} />
      <Route path="/episodes/:id" element={<EpisodeDetails />} />
    </Routes>
  );
};
