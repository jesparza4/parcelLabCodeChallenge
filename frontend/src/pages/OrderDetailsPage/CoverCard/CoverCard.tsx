import styled from "styled-components";
import { Typography } from "../../../components/Typography";
import { Checkpoint, DeliveryStatus } from "../../../models";
import { InfoCard } from "../OrderDetailsPage.styles";
import { NewDeliveryDate } from "./NewDeliveryDate";
import { ReadyForCollectionCard } from "./ReadyForCollection";
import { Registered } from "./Registered";

interface CoverCardProps {
  checkpoint?: Checkpoint;
}
export const CoverCard = ({ checkpoint }: CoverCardProps) => {
  if (!checkpoint) return <></>; // skeleton would be nice

  const coverCardContainer: Record<keyof typeof DeliveryStatus, JSX.Element> = {
    /** Implementation of the next 3 missing 😇 */
    failedAttempt: <></>,
    delivered: <></>,
    inTransit: <></>,
    newDelivery: (
      <NewDeliveryDate
        deliveryDate={checkpoint?.meta?.deliveryDate}
        deliveryTimeFrameFrom={checkpoint?.meta?.deliveryTimeFrameFrom}
        deliveryTimeFrameTo={checkpoint?.meta?.deliveryTimeFrameTo}
      />
    ),
    readyForCollection: (
      <ReadyForCollectionCard
        pickupAddress={checkpoint.meta?.pickupAddress}
        pickupAddressLink={checkpoint.meta?.pickupAddressLink}
        addressMapUrl={checkpoint?.meta?.pickupAddressMapUrl}
      />
    ),
    registered: <Registered />,
  };

  return (
    <CoverCardRoot title={checkpoint.status}>
      <>
        <InfoCard.CardBody>
          <Typography>{checkpoint.statusDetails}</Typography>
        </InfoCard.CardBody>
        {coverCardContainer[checkpoint.statusKey]}
      </>
    </CoverCardRoot>
  );
};

const CoverCardRoot = styled(InfoCard)`
  padding-bottom: 0 !important;
`;
