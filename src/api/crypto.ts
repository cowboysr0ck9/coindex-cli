import { http } from "./http";

export const getCryptoData = async (
  key: string,
  coins: string,
  currency: string
) => {
  const data = await http.get(`?key=${key}&ids=${coins}&convert=${currency}`);
  return data.data;
};
