import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.li`
  flex-basis: 25%;
  flex-grow: 0;
  flex-shrink: 0;

  padding: ${({ theme }) => theme.spacing.xs};

  display: flex;
  flex-direction: column;
`;

const CardShow = ({ id, name, image }) => {
  const noImage =
    "http://static.tvmaze.com/images/no-img/no-img-landscape-text.png";
  return (
    <Container>
      <Link to={{ pathname: `/shows/${id}` }}>
        <h5>{name}</h5>
      </Link>
      {
        <img
          style={{ width: "100%" }}
          src={image ? image.medium : noImage}
          alt={name}
        />
      }
    </Container>
  );
};

export default CardShow;
