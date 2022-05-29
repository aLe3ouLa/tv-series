import styled from "styled-components";

export const GenreList = styled.ul`
  display: flex;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    flex-direction: row;
  }
`;

export const GenreItem = styled.li`
  :not(:first-child) {
    &:before {
      content: "";
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    :not(:first-child) {
      &:before {
        content: "|";
        margin-right: ${({ theme }) => theme.spacing.xs};
        margin-left: ${({ theme }) => theme.spacing.xs};
      }
    }
  }
`;

export const GenreLabel = styled.span`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.xxs}
    ${({ theme }) => theme.spacing.xs};
  background-color: ${({ theme }) => theme.color.secondary};
  border-radius: 4px;
  font-size: 1.4rem;

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: 1.6rem;
  }
`;
