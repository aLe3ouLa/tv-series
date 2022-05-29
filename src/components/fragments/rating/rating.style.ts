import styled from "styled-components";

export const RatingContainer = styled.div`
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

export const RatingLabel = styled.p`
  margin-left: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.color.secondary};
  font-weight: bold;
`;