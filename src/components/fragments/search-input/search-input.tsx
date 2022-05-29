import React, { useContext } from "react";
import Search from "../icons/search";

import Button from "../button";
import { SearchContext } from "../../../context/SearchContext";
import { Input, SearchContainer } from "./search-input.style";

const SearchInput: React.FC = () => {
  const { query, setQuery, onSearchShows } = useContext(SearchContext);

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value ?? "";
    setQuery?.(newValue);
  };

  return (
    <SearchContainer>
      <Input
        data-testid={`input-field`}
        type="text"
        value={query}
        onChange={onHandleChange}
        placeholder="Search series..."
      />
      <Button onClick={onSearchShows}>
        <Search />
      </Button>
    </SearchContainer>
  );
};

export default SearchInput;
