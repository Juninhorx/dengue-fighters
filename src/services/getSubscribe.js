import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3333" });

const getSubscribe = async (eventId) => {
  const response = await api.get(`/subscribers/${eventId}`);
  return response.data;
};

export { getSubscribe, api };