"use client";
import React from "react";
import styled from "styled-components";
import { Typography } from "../Typography";
import { Flex } from "../Flex";
import moment from "moment";

export type CheckpointProps = {
  status: string;
  details: string;
  timestamp: string;
  location: string;
};

export const Checkpoint: React.FC<CheckpointProps> = ({
  status,
  details,
  timestamp,
  location,
}: CheckpointProps) => {
  const checkpointDate = moment(timestamp).format("dd DD.MM.YY, HH:mm");

  return (
    <Flex direction="column" gap={2}>
      <CheckpointText fontWeight="bold">{status}</CheckpointText>
      <CheckpointText color={({ gray }) => gray[500]}>{details}</CheckpointText>
      <Flex justifyContent="space-between" alignItems="center" flexWrap>
        <CheckpointText color={({ gray }) => gray[400]} fontWeight="bold">
          {location}
        </CheckpointText>
        <CheckpointText color={({ gray }) => gray[400]} fontWeight="bold">
          {checkpointDate}
        </CheckpointText>
      </Flex>
    </Flex>
  );
};

const CheckpointText = styled(Typography).attrs({ fontSize: "xs" })`
  text-align: start;
`;
