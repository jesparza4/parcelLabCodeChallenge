import { Flex } from "../../components/Flex";
import { TextField } from "../../components/TextField";
import { Button } from "../../components/Button";
import { Typography } from "../../components/Typography";
import { Logo } from "../../components/Logo";
import {
  Alert,
  DescriptionContainer,
  Form,
  LoginCard,
  LogoContainer,
} from "./LoginPage.styles";
import { useLoginPageViewModel } from "./LoginPage.viewModel";

export const LoginPage = () => {
  const { isOrderNotFound, handleSubmit } = useLoginPageViewModel();

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      style={{ height: "100%" }}
    >
      <LoginCard>
        <LoginCard.CardBody>
          <Flex gap={4} direction="column" alignItems="center">
            <LogoContainer>
              <Logo />
            </LogoContainer>
            <Typography fontSize="sm" fontWeight="bold">
              Track your order
            </Typography>
            <DescriptionContainer>
              <Typography variant="caption">
                Enter your order number and zip code combination to see the
                order details and shipping updates
              </Typography>
            </DescriptionContainer>
            {isOrderNotFound && (
              <Alert>
                <Typography fontSize="xs">
                  We couldn't find the order with the provided data 😢 <br />
                  Please check your input
                </Typography>
              </Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <TextField label="Order Number" name="trackingNumber" />
              <TextField label="Zip Code" name="zipCode" />
              <hr />
              <Button fullWidth type="submit">
                Track
              </Button>
            </Form>
          </Flex>
        </LoginCard.CardBody>
      </LoginCard>
    </Flex>
  );
};
