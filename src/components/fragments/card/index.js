import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.li`
  flex-basis: 25%;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    padding: ${({ theme }) => theme.spacing.xs};
  }
`;

const Title = styled.h5`
  padding: ${({ theme }) => theme.spacing.sm} 0;
  line-height: 2rem;
  height: 5rem;
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    padding: ${({ theme }) => theme.spacing.xs} 0;
  }
`;

const StyledTitle = styled(Link)`
  &:hover h5 {
    color: ${({ theme }) => theme.color.accent};
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

const Card = ({ id, name, season, number, airdate, image, summary }) => {
  const noImage =
    "http://static.tvmaze.com/images/no-img/no-img-landscape-text.png";
  return (
    <Container>
      <StyledTitle to={{ pathname: `/episodes/${id}` }}>
        <Title>{name}</Title>
      </StyledTitle>
      {<img src={image ? image.medium : noImage} alt={name} />}
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

export default Card;
