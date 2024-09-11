import moment from "moment";
import { Flex } from "../../../components/Flex";
import { Typography } from "../../../components/Typography";
import { Card } from "../../../components/Card";
import { Image } from "../../../components/Image";

interface NewDeliveryDateProps {
  deliveryDate?: string;
  deliveryTimeFrameFrom?: string;
  deliveryTimeFrameTo?: string;
}
export const NewDeliveryDate = ({
  deliveryDate,
  deliveryTimeFrameFrom,
  deliveryTimeFrameTo,
}: NewDeliveryDateProps) => (
  <Card.CardBody gap={7}>
    <Flex direction="column" gap={4}>
      <Typography fontSize="sm">New delivery date</Typography>
      <Typography>{moment(deliveryDate).format("MMM Do YY")}</Typography>
    </Flex>

    <Flex direction="column" gap={4}>
      <Typography fontSize="sm">Time frame</Typography>
      <Flex gap={3}>
        <Typography>{deliveryTimeFrameFrom}</Typography>
        <Typography>-</Typography>
        <Typography>{deliveryTimeFrameTo}</Typography>
      </Flex>
    </Flex>
  </Card.CardBody>
);
