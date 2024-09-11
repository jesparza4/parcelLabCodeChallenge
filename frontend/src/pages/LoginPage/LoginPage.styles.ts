import styled from "styled-components";
import { Card } from "../../components/Card";

export const LoginCard = styled(Card)`
  position: relative;
  max-width: 300px;
  padding-top: ${({ theme }) => theme.spacing(9)};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const DescriptionContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(3)};
  text-align: center;
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: -32px;
`;

export const Alert = styled.div`
  padding: ${({ theme }) => theme.spacing(3)};
  border-radius: ${({ theme }) => theme.borderRadius(1)};
  border: 2px solid #d3163b;
  color: white;

  background-color: color-mix(
    in HSL,
    ${({ theme }) => theme.palette.red[500]} 40%,
    white
  );
`;
