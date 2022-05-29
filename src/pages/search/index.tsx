import React, { useContext } from "react";
import styled from "styled-components";

import SearchInput from "../../components/fragments/search-input/search-input";
import { ShowCard } from "../../components/fragments/show-card/show-card";

import Wrapper from "../../components/fragments/wrapper";
import { SearchContext } from "../../context/SearchContext";
import { IShow } from "../../types/IShow";

const SeriesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
`;

const Search: React.FC = () => {
  const { shows } = useContext(SearchContext);

  console.log(shows)

  return (
    <>
      <SearchInput />
      <Wrapper>
        {shows && <h5>Results ({shows.length})</h5>}
        <SeriesList>
          {shows?.length > 0 ? (
            shows.map((show: IShow) => <ShowCard key={show.id} {...show} />)
          ) : (
            <p>No results, try other keyword</p>
          )}
        </SeriesList>
      </Wrapper>
    </>
  );
};

export default Search;
