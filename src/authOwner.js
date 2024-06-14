const authOwner = (id) => {
  const userLoggedId = JSON.parse(localStorage.getItem('user')).id
  console.log(userLoggedId === id)
  return userLoggedId === id
}

export default authOwner