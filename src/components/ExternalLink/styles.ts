import styled, { css } from "styled-components";

interface IContainerProps {
  variant?: "iconLeft";
}

export const Container = styled.a<IContainerProps>`
  border: none;
  background: none;
  font-size: ${({ theme }) => theme.textSizes["components-link"]};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  transition: 0.4s;
  border-radius: 1px solid transparent;
  height: 19px;
  line-height: 19px;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }
  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors["brand-blue"]};
  }

  ${({ variant }) =>
    variant === "iconLeft" &&
    css`
      flex-direction: row-reverse;
    `}
`;
