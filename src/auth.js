const isAuthenticated = () => {
  let status = localStorage.getItem('user')
  return status !== "null"
}

export default isAuthenticated
