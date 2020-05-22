import React from "react";
import styled from "styled-components";

const GenreList = styled.ul`
  display: flex;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    flex-direction: row;
  }
`;

const GenreItem = styled.li`
  .genre-label {
    display: inline-block;
    padding: ${({ theme }) => theme.spacing.xxs};
    background-color: ${({ theme }) => theme.color.secondary};
    border-radius: 8px;
    font-size: 1.2rem;
  }
  :not(:first-child) {
    &:before {
      content: "";
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    .genre-label {
      border-radius: 4px;
      font-size: 1.6rem;
    }
    :not(:first-child) {
      &:before {
        content: "|";
        margin-right: ${({ theme }) => theme.spacing.xs};
        margin-left: ${({ theme }) => theme.spacing.xs};
      }
    }
  }
`;

const Genres = ({ genres }) => {
  return (
    <GenreList>
      {genres.map((genre, index) => (
        <GenreItem key={index} data-testid={`genre-list`}>
          <span className="genre-label">{genre}</span>
        </GenreItem>
      ))}
    </GenreList>
  );
};

export default Genres;
