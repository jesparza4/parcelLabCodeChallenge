import styled from "styled-components";

export const Image = styled.img<{ noShadow?: boolean }>`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius(1)};
  box-shadow: ${({ theme, noShadow }) =>
    noShadow ? "none" : theme.shadows(0)};
`;
