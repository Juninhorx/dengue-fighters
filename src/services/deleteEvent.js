import {api} from './createUser.js'

const deleteEvent = async (id) => {
  const response = await api.delete(`/delete-event/${id}`)
  console.log(response)
  return response
}

export {
  deleteEvent
}