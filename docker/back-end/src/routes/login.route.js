const express = require('express');

const loginRoute = express.Router();
const { loginMiddleware } = require('../middlewares');
const { loginController } = require('../controllers');

loginRoute.post('/', loginMiddleware.checkLogin, loginController.login);

module.exports = loginRoute;