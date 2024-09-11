import styled from "styled-components";
import { Card } from "../../../components/Card";
import { Image } from "../../../components/Image";

export const Registered = () => (
  <Content alignItems="center" justifyContent="center">
    <TransitImage noShadow />
  </Content>
);

const Content = styled(Card.CardBody)`
  flex: 1;
`;

const TransitImage = styled(Image).attrs({
  src: "/images/transportationIcon.png",
})`
  width: 50%;
  opacity: 0.3;
`;
