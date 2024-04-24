const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const validation = async (request, response, next) => {
  if (!request.headers.authorization) {
    return response.status(401).json({ message: 'Token not found' });
  }
  const [type, token] = request.headers.authorization.split(' ');
  if (type !== 'Bearer') {
    return response.status(401).json({ message: 'Expired or invalid token' });
  }
  try {
    const payload = jwt.verify(token, secret);
    request.user = payload;
  } catch (error) {
    return response.status(401).json({ message: 'Expired or invalid token' });
  }
  next();
};

module.exports = validation;