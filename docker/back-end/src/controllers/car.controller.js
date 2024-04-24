const { carService } = require('../services');
const { inf } = require('../services/car.service');

const someInfo = async (request, response) => {
  const info = await carService.inf();
  response.status(200).json(info);
};

const allInfo = async (request, response) => {
  const info = await carService.allInfo();
  response.status(200).json(info);
};

const findBySold = async (request, response) => {
  const { sold } = request.body;
  const info = await carService.findCarBySold(sold);
  response.status(200).json(info);
};

const findByBrand = async (request, response) => {
  const { brand } = request.body;
  const info = await carService.findCarByBrand(brand);
  if (info.length === 0) {
    return response.status(404).json({ message: 'Car not found'});
  };
  response.status(200).json(info);
};

module.exports = {
  someInfo,
  allInfo,
  findByBrand,
  findBySold,
};
