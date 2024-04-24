const { Seller } = require('../models');

const login = async (email, password) => {
  const seller = await Seller.findOne({ where: { email } });
  if (seller && seller.password === password) {
    const info = {
      register: seller.sellerId,
      name: seller.fullName,
      email: seller.email,
    };
    return info;
  }
  return null;
};

module.exports = {
  login,
};