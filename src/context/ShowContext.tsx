import { useState, createContext, useEffect, SetStateAction } from "react";
import tvmaze from "../api/tvmaze";
import { ICast } from "../types/ICast";
import { IEpisode } from "../types/IEpisode";
import { IShow } from "../types/IShow";

export interface IShowContext {
  show: IShow | null;
  episodes: IEpisode[];
  cast: ICast[];
  setPath: React.Dispatch<React.SetStateAction<string | undefined>>;
}

// SearchHandler is a function for changing the state.
export const ShowContext = createContext<IShowContext>({
  show: null,
  episodes: [],
  cast: [],
  setPath: (value: SetStateAction<string | undefined>) => {},
});

// Defining a simple HOC component
const ShowContextProvider: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const [show, setShow] = useState<IShow | null>(null);
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);
  const [cast, setCast] = useState<ICast[]>([]);
  const [showid, setPath] = useState<string | undefined>("");

  useEffect(() => {
    const fetchShow = async () => {
      if (!showid) return;
      const response = await tvmaze.get(`shows/${showid}`);
      console.log(response);
      setShow(response.data);
    };

    fetchShow();
  }, [showid]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      if (!showid) return;
      const response = await tvmaze.get(`shows/${showid}/episodes`);
      console.log(response);
      setEpisodes(response.data);
    };

    fetchEpisodes();
  }, [showid]);

  useEffect(() => {
    const fetchCast = async () => {
      if (!showid) return;
      const response = await tvmaze.get(`shows/${showid}/cast`);
      console.log(response);
      setCast(response.data);
    };
    fetchCast();
  }, [showid]);

  const value = {
    show,
    episodes,
    cast,
    setPath,
  };

  return <ShowContext.Provider value={value}>{children}</ShowContext.Provider>;
};

export default ShowContextProvider;
