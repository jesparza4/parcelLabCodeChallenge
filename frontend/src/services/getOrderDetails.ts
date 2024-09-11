import axios from "axios";
import { API_URL } from "../consts";
import { Order } from "../models";
import { apiRoutes } from "../apiRoutes";

export const getOrderDetails = async (accessToken?: string) => {
  if (!accessToken) {
    throw Error("Must pass an access token!");
  }

  const { data } = await axios
    .get<Order>(API_URL + apiRoutes.orderDetails, {
      params: {
        access_token: accessToken,
      },
    })
    .catch((error) => {
      return error;
    });

  return data;
};
