import axios from "axios";

const api = axios.create({baseURL: "http://localhost:3333"})
const postSubscribe = async (Object) => {
  const response = await api.post('/subscribeevent', Object)
  return response
}

export {
  postSubscribe,
  api
}