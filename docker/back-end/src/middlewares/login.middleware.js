const checkLogin = (request, response, next) => {
  const { email, password } = request.body;
  if (!email || !password) {
    return response.status(401).json({ message: 'All fields must be filled' });
  };
  next();
};

module.exports = {
  checkLogin,
};