import axios from "axios";
import { API_URL } from "../consts";
import { apiRoutes } from "../apiRoutes";

export const authenticateOrder = async ({
  trackingNumber,
  zipCode,
}: {
  trackingNumber: string;
  zipCode: string;
}) => {
  const data = await axios
    .post<AuthResponse>(API_URL + apiRoutes.orderAuth, {
      trackingNumber,
      zipCode,
    })
    .catch((error) => {
      throw error;
    });

  return data;
};

interface AuthResponse {
  access_token: string;
}
