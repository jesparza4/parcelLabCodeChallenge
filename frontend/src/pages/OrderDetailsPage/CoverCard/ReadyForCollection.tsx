import styled from "styled-components";
import { Button } from "../../../components/Button";
import { Card } from "../../../components/Card";
import { Image } from "../../../components/Image";
import { Typography } from "../../../components/Typography";

interface ReadyForCollectionCardProps {
  addressMapUrl?: string;
  pickupAddress?: string;
  pickupAddressLink?: string;
}

export const ReadyForCollectionCard = ({
  addressMapUrl,
  pickupAddress,
  pickupAddressLink,
}: ReadyForCollectionCardProps) => {
  const openMapWithDirections = () => {
    window.open(pickupAddressLink, "_newtab");
  };

  /**
   * Instead of showing the whole address
   * in a single line, I want to show
   * zip code and city on a new line.
   */
  const formattedPickupAddress = pickupAddress?.split(",").map((part) => (
    <>
      {part} <br />
    </>
  ));

  return (
    <Card.CardBody noPadding grow={1} justifyContent="flex-end">
      <MapImageContainer>
        <DirectionsOverlay>{formattedPickupAddress}</DirectionsOverlay>
        <Image src={addressMapUrl} />
      </MapImageContainer>
      <CardActionButton onClick={openMapWithDirections} fullWidth>
        Get directions
      </CardActionButton>
    </Card.CardBody>
  );
};

const CardActionButton = styled(Button)`
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
`;

const DirectionsOverlay = styled(Typography).attrs({
  fontSize: "xs",
  fontWeight: "bold",
})`
  position: absolute;
  text-align: right;
  width: 50%;
  right: ${({ theme }) => theme.spacing(3)};
  top: ${({ theme }) => theme.spacing(6)};
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4);
`;

const MapImageContainer = styled.div`
  position: relative;
`;
