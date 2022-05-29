import React, { HTMLAttributes } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: ${({ theme }) => theme.spacing.xs};
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  border-radius: 2px;
`;

const Button: React.FC<HTMLAttributes<HTMLButtonElement>> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
