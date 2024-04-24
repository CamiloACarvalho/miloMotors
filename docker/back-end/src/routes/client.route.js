const express = require('express');

const clientRoute = express.Router();
const { tokenMiddleware, clientMiddleware } = require('../middlewares');
const { clientController } = require('../controllers');

clientRoute.use(tokenMiddleware);
clientRoute.get('/search', clientMiddleware.isNameValid, clientController.findByName);
clientRoute.get('/email', clientMiddleware.isEmailValid, clientController.findByEmail);
clientRoute.get('/cpf', clientMiddleware.isCPFValid, clientController.findByCpf);

module.exports = clientRoute;