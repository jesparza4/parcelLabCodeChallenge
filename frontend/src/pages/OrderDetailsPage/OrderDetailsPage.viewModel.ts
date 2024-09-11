import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Order } from "../../models";
import { getOrderDetails } from "../../services/getOrderDetails";
import moment from "moment";

export const useOrderDetailsPageViewModel = () => {
  const accessToken = getCookie("access-token");
  const navigate = useNavigate();

  const { data, error, isLoading } = useQuery<Order>({
    queryKey: ["orders"],
    enabled: !!accessToken,
    queryFn: () => {
      return getOrderDetails(accessToken);
    },
  });

  const handleGoHome = () => {
    navigate("/");
  };

  const deliveryInfo = data?.deliveryInfo;
  const lastCheckpoint = data?.checkpoints[0];
  const articles = data?.deliveryInfo.articles ?? [];
  const checkpoints = data?.checkpoints ?? [];
  const lastUpdated = moment(data?.updated).fromNow();

  return {
    articles,
    checkpoints,
    error,
    lastUpdated,
    isLoading,
    lastCheckpoint,
    deliveryInfo,
    handleGoHome,
  };
};

function getCookie(key: string) {
  var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  return b ? b.pop() : "";
}
