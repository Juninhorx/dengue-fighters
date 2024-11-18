const isAuthenticated = () => {
  let status = localStorage.getItem('user')
  return status !== null && status !== undefined && status !== "falso"
}

export default isAuthenticated
