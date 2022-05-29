import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;

  flex-grow: 0;
  flex-shrink: 0;

  padding: ${({ theme }) => theme.spacing.xs};
  position: relative;

  &:hover {
    &:before {
      content: "";
      border: 3px solid #5b3cd7;
      background-color: #000;
      width: 326px;
      height: 446px;
      border-radius: 4px;

      position: absolute;
      top: 4px;
      left: 4px;
      z-index: -1;
    }
  }
`;

export const Image = styled.img`
  width: 310px;
  height: 430px;
`;

export const Details = styled.div`
  margin-top: 6px;
`;
