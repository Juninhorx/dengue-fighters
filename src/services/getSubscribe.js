import axios from "axios";

const api = axios.create({ baseURL: "https://dengue-fighters-server-production.up.railway.app" });

const getSubscribe = async (eventId) => {
  const response = await api.get(`/subscribers/${eventId}`);
  return response.data;
};

export { getSubscribe, api };