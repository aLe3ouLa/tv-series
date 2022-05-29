import React, { useState, createContext } from "react";
import tvmaze from "../api/tvmaze";
import { IShow } from "../types/IShow";

export interface ISearchContext {
  query: string;
  setQuery?: (query: string) => void;
  onSearchShows?: () => void;
  shows: IShow[];
}

// SearchHandler is a function for changing the state.
export const SearchContext = createContext<ISearchContext>({
  query: "",
  setQuery: (query: string) => { },
  shows: [], 
  onSearchShows: () => {}
});

// Defining a simple HOC component
const SearchContextProvider: React.FC<{ 
  children?: React.ReactNode
}> = ({ children }) => {
  const [query, setQuery] = useState("");
  const [shows, setShows] = useState([]);

  const onSearchShows = async () => {
    const response = await tvmaze.get(`search/shows?q=${query}`);
    const data = response.data.map((res: any) => res.show);
    setShows(data)
  };


  const value = {
    query,
    setQuery,
    shows,
    onSearchShows
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default SearchContextProvider;
