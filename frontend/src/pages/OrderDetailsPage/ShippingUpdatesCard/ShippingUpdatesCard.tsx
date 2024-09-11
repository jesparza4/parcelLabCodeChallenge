import { CheckpointList } from "../../../components/CheckpointList";
import { Flex } from "../../../components/Flex";
import { ProgressBar } from "../../../components/ProgressBar";
import { Checkpoint, DeliveryStatus } from "../../../models";
import { InfoCard } from "../OrderDetailsPage.styles";

interface ShippingUpdatesCardProps {
  checkpoints: Checkpoint[];
}

const deliveryProgress: Record<keyof typeof DeliveryStatus, number> = {
  registered: 10,
  newDelivery: 30,
  inTransit: 50,
  failedAttempt: 70,
  readyForCollection: 80,
  delivered: 100,
};

export const ShippingUpdatesCard = ({
  checkpoints,
}: ShippingUpdatesCardProps) => (
  <InfoCard subtitle="Shipping updates">
    <>
      <InfoCard.CardBody gap={6}>
        <ProgressBar
          firstStep="Processed"
          lastStep="Delivered"
          progress={deliveryProgress[checkpoints[0].statusKey]}
        />
      </InfoCard.CardBody>
      <InfoCard.CardBody gap={6} noPadding>
        <CheckpointList checkpoints={checkpoints} />
      </InfoCard.CardBody>
    </>
  </InfoCard>
);
