const express = require('express');

const carRoute = express.Router();
const { tokenMiddleware, carMiddleware } = require('../middlewares');
const { carController } = require('../controllers');

carRoute.get('/', carController.someInfo);
carRoute.use(tokenMiddleware);
carRoute.get('/all', carController.allInfo);
carRoute.get('/sold', carMiddleware.checkFieldSold, carController.findBySold);
carRoute.get('/brand', carMiddleware.checkFieldBrand, carController.findByBrand);

module.exports = carRoute;