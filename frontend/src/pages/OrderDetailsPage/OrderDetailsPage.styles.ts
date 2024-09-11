import styled from "styled-components";
import { Card } from "../../components/Card";
import { Flex } from "../../components/Flex";
import { Typography } from "../../components/Typography";

export const InfoCard = styled(Card)`
  align-self: stretch;
  padding-bottom: 0;
`;

export const PageRoot = styled(Flex)`
  height: 100%;
`;

export const LastUpdated = styled(Typography).attrs({ variant: "caption" })`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing(2)};
`;
