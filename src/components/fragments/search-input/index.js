import React from "react";
import styled from "styled-components";
import Search from "../icons/search";
import { connect } from "react-redux";

import {
  setSearchTerm,
  fetchShows,
} from "../../../redux/Search/search.actions";
import UniversalButton from "../button";

const Input = styled.input`
  background-color: #f5f5f5;
  border: 1px solid #e3e9ed;
  border-radius: 4px;
  box-shadow: inset 0 1px 3px ${({ theme }) => theme.color.text}05;
  font-size: 1.6rem;
  font-family: inherit;
  padding: ${({ theme }) => theme.spacing.xs};
  flex-grow: 1;
  flex-basis: 80%;
  margin-right: ${({ theme }) => theme.spacing.xs};
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm};
`;

const SearchInput = (props) => {
  const onSearchShows = () => {
    props.fetchShows();
  };

  const onHandleChange = (event) => {
    props.setSearchTerm(event.target.value);
  };
  return (
    <SearchContainer>
      <Input
        data-testid={`input-field`}
        type="text"
        value={props.search}
        onChange={onHandleChange}
        placeholder="Search series..."
      />
      <UniversalButton onClick={onSearchShows}>
        <Search />
      </UniversalButton>
    </SearchContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    search: state.search.searchTerm,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setSearchTerm: (searchTerm) => dispatch(setSearchTerm(searchTerm)),
  fetchShows: () => dispatch(fetchShows()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
