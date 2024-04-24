const generatorToken = require('../tokens/generate.token');
const { loginService } = require('../services');

const login = async (request, response) => {
  const { email, password } = request.body;
  const seller = await loginService.login(email, password);
  if (seller === null) {
    return response.status(401).json({ message: 'Incorrect username or password' });
  }
  const token = await generatorToken(seller);
  const result = { ...seller, ...token };
  return response.status(200).json(result);
};

module.exports = {
  login,
};