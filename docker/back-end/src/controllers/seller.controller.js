const { sellerService } = require('../services');

const findByName = async (request, response) => {
  const name = request.query.q;
  const seller = await sellerService.findByName(name);
  if (seller.length === 0) {
    return response.status(404).json({ message: 'Seller not found' });
  };
  response.status(200).json(seller);
};

const findByEmail = async (request, response) => {
  const { email } = request.body;
  const seller = await sellerService.findByEmail(email);
  if (seller.length === 0) {
    return response.status(404).json({ message: 'Seller not found' });
  };
  response.status(200).json(seller);
};

const findById = async (request, response) => {
  const { id } = request.params;
  const seller = await sellerService.findByRegister(id);
  if (seller.length === 0) {
    return response.status(404).json({ message: 'Seller not found' });
  };
  response.status(200).json(seller);
};

module.exports = {
  findByName,
  findByEmail,
  findById,
};