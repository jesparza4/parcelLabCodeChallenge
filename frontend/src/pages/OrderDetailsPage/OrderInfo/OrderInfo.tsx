import styled from "styled-components";
import { Flex } from "../../../components/Flex";
import { Typography } from "../../../components/Typography";
import { DeliveryInfo } from "../../../models";

interface OrderInfoProps {
  deliveryInfo?: DeliveryInfo;
}

export const OrderInfo = ({ deliveryInfo }: OrderInfoProps) => {
  const orderTotal = deliveryInfo?.articles.reduce(
    (sum, article) => (sum += article.price * article.quantity),
    0
  );
  return (
    <Flex justifyContent="space-between" noFlexShrink flexWrap gap={5}>
      <DeliveryInfoColumn>
        <InfoLabel>Order Number </InfoLabel>
        <Typography>{deliveryInfo?.orderNo}</Typography>
      </DeliveryInfoColumn>
      <DeliveryInfoColumn>
        <InfoLabel>Order Total </InfoLabel>
        <Typography>{orderTotal} eur</Typography>
      </DeliveryInfoColumn>
      <DeliveryInfoColumn>
        <InfoLabel>Recipient</InfoLabel>
        <Typography>{deliveryInfo?.recipient}</Typography>
      </DeliveryInfoColumn>
      <DeliveryInfoColumn>
        <InfoLabel>Delivery Info</InfoLabel>
        <Typography>
          {deliveryInfo?.street}, {deliveryInfo?.city} {deliveryInfo?.region}
        </Typography>
      </DeliveryInfoColumn>
    </Flex>
  );
};

const DeliveryInfoColumn = styled(Flex).attrs({ gap: 2, direction: "column" })`
  flex-shrink: 0;
  width: auto;
  flex-grow: 0;
`;

const InfoLabel = styled(Typography).attrs({ fontSize: "sm" })``;
