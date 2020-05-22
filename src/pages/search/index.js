import React from "react";
import CardShow from "../../components/fragments/card/card-show";
import SearchInput from "../../components/fragments/search-input";
import Wrapper from "../../components/fragments/wrapper";
import styled from "styled-components";
import { connect } from "react-redux";

const SeriesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const Search = ({ searchedShows }) => {
  return (
    <div>
      <SearchInput />
      <Wrapper>
        <h5>Results ({searchedShows && searchedShows.length})</h5>
        <SeriesList>
          {searchedShows && searchedShows.length > 0 ? (
            searchedShows.map(({ show }) => (
              <CardShow key={show.id} {...show} />
            ))
          ) : (
            <p>No results, try other keyword</p>
          )}
        </SeriesList>
      </Wrapper>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchedShows: state.search.searchedShows,
  };
};

export default connect(mapStateToProps)(Search);
