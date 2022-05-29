import React from "react";
import {Rating} from "../../fragments/rating/rating";
import styled from "styled-components";
import Wrapper from "../../fragments/wrapper";
import PopCorn from "../../fragments/icons/popcorn";
import {Genres} from "../../fragments/genres/genre";
import { IShow } from "../../../types/IShow";

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    flex-direction: row;

    & > :first-child {
      margin-right: ${({ theme }) => theme.spacing.sm};
    }
  }
`;

const GenreContainer = styled.div`
  display: flex;
  align-self: center;
  margin-top: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.xxs};

  & > :first-child {
    margin-right: ${({ theme }) => theme.spacing.xs};
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing.xxs};
  margin-bottom: ${({ theme }) => theme.spacing.xxs};

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    flex-direction: row;
    margin-top: ${({ theme }) => theme.spacing.xs};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
`;

const SummaryContainer = styled.div`
  margin-left: 0;
  flex-basis: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    margin-left: ${({ theme }) => theme.spacing.md};
    flex-basis: 50%;
  }
`;

const ShowInformation: React.FC<IShow> = (show) => {
  const { name, image, summary, genres = [], rating, status, language } = show;
  return (
    <Wrapper as="section">
      <TitleWrapper data-testid="title-wrapper">
        <h1 data-testid="title">{name}</h1>
        {rating?.average && <Rating {...rating} />}
      </TitleWrapper>

      <GenreContainer data-testid="genre-wrapper">
        <PopCorn />
        <Genres genres={genres} />
      </GenreContainer>
      <DetailsContainer data-testid="details-wrapper">
        <img
          src={image.medium}
          alt={name}
          data-testid="image-id"
        />
        <SummaryContainer>
          <h5>
            <strong>Summary</strong>
          </h5>
          <span
            data-testid="summary-html"
            dangerouslySetInnerHTML={{
              __html: summary,
            }}
          ></span>
          <br />
          {status && (
            <p>
              <strong>Status: </strong>
              {status}
            </p>
          )}
          {language && (
            <p>
              <strong>Language: </strong>
              {language}
            </p>
          )}
        </SummaryContainer>
      </DetailsContainer>
    </Wrapper>
  );
};
export default ShowInformation;
