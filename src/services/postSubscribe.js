import axios from "axios";

const api = axios.create({baseURL: "https://dengue-fighters-server-production.up.railway.app"})
const postSubscribe = async (Object) => {
  const response = await api.post('/subscribeevent', Object)
  return response
}

export {
  postSubscribe,
  api
}