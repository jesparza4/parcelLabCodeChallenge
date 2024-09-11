import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { authenticateOrder } from "../../services/authenticateOrder";

const ORDER_NOT_AVAILABLE_ERROR = "order_not_available";

export const useLoginPageViewModel = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: authenticateOrder,
    throwOnError: false,
    onError: (error: AxiosError<{ message: string }>) => {
      console.log(error.response?.data.message);
    },
    onSuccess: (response) => {
      document.cookie = `access-token=${response.data.access_token}`;
      navigate("/order_details");
    },
  });

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      trackingNumber: { value: string };
      zipCode: { value: string };
    };

    const { trackingNumber, zipCode } = target;
    mutation.mutate({
      trackingNumber: trackingNumber.value,
      zipCode: zipCode.value,
    });
  };

  const isOrderNotFound =
    mutation.error?.response?.data.message === ORDER_NOT_AVAILABLE_ERROR;

  return {
    isOrderNotFound,
    handleSubmit,
  };
};
