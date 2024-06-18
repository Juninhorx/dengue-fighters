const isAuthenticated = () => {
  let status = localStorage.getItem('user')
  return status !== null && status !== undefined
}

export default isAuthenticated
