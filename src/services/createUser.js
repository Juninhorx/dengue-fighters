import axios from "axios";

const api = axios.create({baseURL: "https://dengue-fighters-server-production.up.railway.app"})
const postUser = async (userObject) => {
  const response = await api.post('/createuser', userObject)
  return response
}

export {
  postUser,
  api
}