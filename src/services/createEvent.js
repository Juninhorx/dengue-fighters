import axios from "axios";

const api = axios.create({baseURL: "https://dengue-fighters-server-production.up.railway.app"})
const postEvent = async (userObject) => {
  const response = await api.post('/createevent', userObject)
  return response
}

export {
postEvent,
  api
}