import styled from "styled-components";

const LOGO_SIZE = 64;

export const Logo = styled.img.attrs({ src: "/images/parcelLabLogo.png" })`
  border-radius: ${({ theme }) => theme.borderRadius(2)};
  width: ${LOGO_SIZE}px;
  box-shadow: ${({ theme }) => theme.shadows(1)};
`;
