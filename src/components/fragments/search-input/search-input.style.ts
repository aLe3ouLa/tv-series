import styled from "styled-components";

export const Input = styled.input`
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

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm};
`;