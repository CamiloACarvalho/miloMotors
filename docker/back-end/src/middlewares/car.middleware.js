const checkFieldSold = (request, response, next) => {
  const { sold } = request.body;
  if (!sold) {
    return response.status(400).json({ message: '"sold" is required' });
  }
  next();
};

const checkFieldBrand = (request, response, next) => {
  const { brand } = request.body;
  if (!brand) {
    return response.status(400).json({ message: '"brand" is required' });
  }
  next();
};

module.exports = {
  checkFieldBrand,
  checkFieldSold,
}