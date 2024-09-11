import styled from "styled-components";
import { Flex } from "../Flex";
import { Typography } from "../Typography";

export const ArticleRoot = styled(Flex)`
  background-color: ${({ theme }) => theme.palette.common.white};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

export const ImageContainer = styled(Flex)`
  flex: 1;
`;

export const ArticleDetails = styled(Flex)`
  flex: 3;
`;

export const PriceText = styled(Typography).attrs({
  fontWeight: "normal",
  variant: "caption",
  color: ({ common }) => common.black,
})``;
