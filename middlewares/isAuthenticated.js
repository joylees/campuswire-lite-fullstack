const isAuthenticated = (req, res, next) => {
  const { username } = req.session

  console.log(username)

  if (username || username !== '') {
    next()
  } else {
    next('Unauthorized user')
  }
}

module.exports = isAuthenticated
