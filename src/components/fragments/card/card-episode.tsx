import React from "react";
import styled from "styled-components";

import { IEpisode } from "../../../types/IEpisode";

const Container = styled.li`
  flex-basis: 25%;
  flex-grow: 0;
  flex-shrink: 0;

  padding: ${({ theme }) => theme.spacing.xs};

  display: flex;
  flex-direction: column;
`;

const Title = styled.h5`
  padding: ${({ theme }) => theme.spacing.xs} 0;
  line-height: 2rem;
  height: 7rem;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    height: 5rem;
  }
`;

const Subtitle = styled.p`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.spacing.xs} 0;

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    flex-direction: row;
  }
`;

const EpisodeCard = ({
  name,
  season,
  number,
  airdate,
  image,
  summary,
}: IEpisode) => {
  const noImage =
    "http://static.tvmaze.com/images/no-img/no-img-landscape-text.png";
  return (
    <Container>
      <Title>{name}</Title>
      <img
        style={{ width: "70%" }}
        src={image ? image.medium : noImage}
        alt={name}
      />
      <Subtitle>
        <span>
          <strong>Episode:</strong> {season}x{number}
        </span>
        <span>
          <strong>Airdate:</strong> {airdate}
        </span>
      </Subtitle>
      <span
        dangerouslySetInnerHTML={{
          __html: summary,
        }}
      ></span>
    </Container>
  );
};

export default EpisodeCard;
