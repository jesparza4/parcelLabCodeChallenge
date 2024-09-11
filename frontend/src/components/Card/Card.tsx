import styled from "styled-components";
import { Typography } from "../Typography";
import { Flex } from "../Flex";

interface CardProps {
  title?: string;
  subtitle?: string;
  children: JSX.Element;
  className?: string;
}
export const Card = ({ title, className, children, subtitle }: CardProps) => {
  return (
    <CardRoot direction="column" className={className}>
      <Flex direction="column" gap={7} grow={1}>
        {title && (
          <CartTitleSubtitle variant="title">{title}</CartTitleSubtitle>
        )}
        <Flex gap={4} direction="column" grow={1}>
          {subtitle && (
            <CartTitleSubtitle fontSize="sm" fontWeight="bold">
              {subtitle}
            </CartTitleSubtitle>
          )}
          {children}
        </Flex>
      </Flex>
    </CardRoot>
  );
};

const CardRoot = styled(Flex)`
  border-radius: ${({ theme }) => theme.borderRadius(1)};
  box-shadow: ${({ theme }) => theme.shadows(1)};
  padding: ${({ theme }) => theme.spacing(5)} 0;
  background-color: ${({ theme }) => theme.palette.common.white};
  flex: 1;
`;

const CardBody = styled(Flex).attrs({ direction: "column" })<{
  noPadding?: boolean;
}>`
  padding: 0 ${({ noPadding, theme }) => (noPadding ? 0 : theme.spacing(5))};
`;

const CartTitleSubtitle = styled(Typography)`
  padding: 0 ${({ theme }) => theme.spacing(5)};
`;

Card.CardBody = CardBody;
