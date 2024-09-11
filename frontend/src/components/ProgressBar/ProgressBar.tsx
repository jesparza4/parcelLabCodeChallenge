import styled from "styled-components";
import { Flex } from "../Flex";
import { Typography } from "../Typography";

interface ProgressBarProps {
  firstStep: string;
  lastStep: string;
  /**
   * A number between
   * 0 and 100
   */
  progress: number;
}

export const ProgressBar = ({
  firstStep,
  lastStep,
  progress,
}: ProgressBarProps) => {
  return (
    <Flex direction="column" gap={3} noFlexShrink>
      <ProgressIndicatorRoot>
        <ProgressIndicator progress={progress} />
      </ProgressIndicatorRoot>
      <Flex justifyContent="space-between" alignItems="center">
        <StepLabel>{firstStep}</StepLabel>
        <StepLabel>{lastStep}</StepLabel>
      </Flex>
    </Flex>
  );
};

const ProgressIndicatorRoot = styled.div`
  width: 100%;
  height: 16px;
  background-color: ${({ theme }) => theme.palette.gray[200]};
  border-radius: ${({ theme }) => theme.borderRadius(2)};
`;

const ProgressIndicator = styled.div<{ progress: number }>`
  width: ${({ progress }) => `${progress}%`};
  height: 16px;
  background-color: ${({ theme }) => theme.palette.primary[500]};
  border-radius: ${({ theme }) => theme.borderRadius(2)};
`;

const StepLabel = styled(Typography).attrs({
  variant: "caption",
  fontWeight: "bold",
  color: ({ gray }) => gray[400],
})``;
