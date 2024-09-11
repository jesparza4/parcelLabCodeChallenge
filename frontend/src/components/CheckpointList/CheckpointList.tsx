import { useState } from "react";
import { Checkpoint } from "../../models";
import { Button } from "../Button";
import { Checkpoint as CheckpointItem } from "../Checkpoint/Checkpoint";
import { Flex } from "../Flex";
import styled from "styled-components";

interface CheckpointListProps {
  checkpoints: Checkpoint[];
}
export const CheckpointList = ({ checkpoints }: CheckpointListProps) => {
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll((prevState) => !prevState);
  };

  const compactList = checkpoints.slice(0, 3);

  return (
    <ListContainer>
      <Flex direction="column" gap={7} alignItems="center">
        {(showAll ? checkpoints : compactList).map(
          ({ status, statusDetails, eventTimestamp, city }) => (
            <CheckpointItem
              status={status}
              details={statusDetails}
              timestamp={eventTimestamp}
              location={city}
            />
          )
        )}

        {checkpoints.length > 3 && (
          <Footer>
            <Button variant="secondary" onClick={handleShowMore}>
              {showAll ? "less" : "more"}
            </Button>
          </Footer>
        )}
      </Flex>
    </ListContainer>
  );
};

const Footer = styled(Flex)`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.common.white};
  position: sticky;
  bottom: 0;
`;

const ListContainer = styled.div`
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing(5)};
  padding-bottom: 0;
`;
