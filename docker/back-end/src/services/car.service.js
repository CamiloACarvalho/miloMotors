const { Car } = require('../models');

const inf = async () => {
  const info = await Car.findAll({
    where: { sold: false},
    attributes: { exclude: ['manufactureYear', 'brand', 'type', 'purchased', 'plate', 'sold'] }, 
  })
  return info;
};

const allInfo = async () => {
  const info = await Car.findAll({
    where: { sold: false},
  })
  return info;
};

const findCarBySold = async (itHas) => {
  const info = await Car.findAll({
    where: { sold: itHas},
  })
  return info;
};

const findCarByBrand = async (nameBrand) => {
  const info = await Car.findAll({
    where: { brand: nameBrand},
  })
  return info;
};

module.exports = {
  inf,
  allInfo,
  findCarBySold,
  findCarByBrand,
};