const { SaleCar } = require('../models');

const addInformation = {
  include: [
    { model: Sale, as: 'sales', attributes: { exclude: ['password'] } },
    { model: Car, as: 'cars', through: { attributes: [] } },
  ],
};
