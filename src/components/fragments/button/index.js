import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: ${({ theme }) => theme.spacing.xs};
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
`;

const UniversalButton = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default UniversalButton;
