import styled, { css } from "styled-components";

type ButtonVariant = "primary" | "secondary";

export const Button = styled.button<{
  variant?: ButtonVariant;
  fullWidth?: boolean;
}>`
  background-color: ${({ theme }) => theme.palette.primary[500]};
  color: ${({ theme }) => theme.palette.common.white};
  padding: ${({ theme }) => theme.spacing(3)};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius(1)};
  font-size: ${({ theme }) => theme.fontSize.md};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  &:hover {
    background-color: color-mix(
      in HSL,
      ${({ theme }) => theme.palette.primary[500]} 90%,
      black
    );
  }

  ${({ variant }) => variant === "secondary" && secondaryButtonStyles}
`;

export const secondaryButtonStyles = css`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.palette.gray[400]};
  text-transform: lowercase;
  background-color: transparent;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing(2)} 0;

  &:hover {
    color: ${({ theme }) => theme.palette.gray[500]};
    background-color: ${({ theme }) => theme.palette.common.white};
  }
`;
