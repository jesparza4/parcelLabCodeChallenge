import { Flex } from "../../components/Flex";
import { Logo } from "../../components/Logo";

import { CoverCard } from "./CoverCard";
import { ShippingUpdatesCard } from "./ShippingUpdatesCard";
import { ArticlesCard } from "./ArticlesCard";
import { useOrderDetailsPageViewModel } from "./OrderDetailsPage.viewModel";
import { LastUpdated, PageRoot } from "./OrderDetailsPage.styles";
import { Button } from "../../components/Button";
import { OrderInfo } from "./OrderInfo";

export const OrderDetailsPage = () => {
  const {
    articles,
    checkpoints,
    deliveryInfo,
    error,
    isLoading,
    lastCheckpoint,
    lastUpdated,
    handleGoHome,
  } = useOrderDetailsPageViewModel();

  if (isLoading) {
    return <></>; // Skeleton or a loading would be nice here
  }

  if (error) {
    return (
      <Flex alignItems="center" justifyContent="center" direction="column">
        <h1>Whelp, something went wrong. Input your order again</h1>
        <Button variant="secondary" onClick={handleGoHome}>
          To login
        </Button>
      </Flex>
    );
  }

  return (
    <PageRoot gap={5} direction="column" alignItems="center">
      <Flex
        gap={7}
        alignItems="center"
        justifyContent="space-between"
        noFlexShrink
      >
        <Logo />
        <Button onClick={handleGoHome}>🔒 sign out</Button>
      </Flex>
      <OrderInfo deliveryInfo={deliveryInfo} />
      <Flex gap={4} grow={1} flexWrap>
        <CoverCard checkpoint={lastCheckpoint} />
        <ShippingUpdatesCard checkpoints={checkpoints} />
        <ArticlesCard articles={articles} />
      </Flex>
      <LastUpdated>Last updated {lastUpdated}</LastUpdated>
    </PageRoot>
  );
};
