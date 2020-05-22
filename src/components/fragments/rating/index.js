import React from "react";
import Star from "../icons/star";
import styled from "styled-components";

const RatingContainer = styled.div`
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 4px;
  padding: ${({ theme }) => theme.spacing.xxs}
    ${({ theme }) => theme.spacing.xs};

  display: flex;
  align-items: center;
  justify-content: flex-start;

  max-width: 30%;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    max-width: 10%;
  }
`;

const RatingLabel = styled.p`
  margin-left: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.color.secondary};
  font-weight: bold;
`;

const Rating = ({ average = 0 }) => {
  return (
    <RatingContainer data-testid={`rating-field`}>
      <Star />
      <RatingLabel>{average}</RatingLabel>
    </RatingContainer>
  );
};

export default Rating;
