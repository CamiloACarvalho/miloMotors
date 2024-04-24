const jwt = require('jsonwebtoken');

const generatorToken = async (seller) => {
  const secret = process.env.JWT_SECRET;
  
  const key = jwt.sign({
    userId: seller.register,
    name: seller.name,
    email: seller.email,
    role: 'user',
  },
  secret, 
  {
    algorithm: 'HS256',
    expiresIn: '7d',
  });

  return { token: key };
};

module.exports = generatorToken;