import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3333" });

const getEvent = async () => {
  const response = await api.get('/getevent');
  return response.data;
};

export { getEvent, api };