import styled from "styled-components";
import { Flex } from "../Flex";

interface TextFieldProps {
  label: string;
  placeholder?: string;
  errorMessage?: string;
  name: string;
}

export const TextField = ({
  label,
  placeholder,
  errorMessage,
  name,
}: TextFieldProps) => {
  return (
    <Flex direction="column" gap={2}>
      <Label>{label}</Label>
      <Input placeholder={placeholder} name={name} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Flex>
  );
};

const Label = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: bold;
`;

const ErrorMessage = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: red;
`;

const Input = styled.input`
  font-size: ${({ theme }) => theme.fontSize.md};
  padding: ${({ theme }) => theme.spacing(3)};
  border-radius: ${({ theme }) => theme.borderRadius(1)};
  background-color: ${({ theme }) => theme.palette.gray[100]};
  border-color: ${({ theme }) => theme.palette.gray[200]};
  border-style: solid;
  width: 100%;
`;
