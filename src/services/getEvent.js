import axios from "axios";

const api = axios.create({ baseURL: "https://dengue-fighters-server-production.up.railway.app" });

const getEvent = async () => {
  const response = await api.get('/getevent');
  return response.data;
};

export { getEvent, api };