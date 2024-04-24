const express = require('express');

const sellerRouter = express.Router();
const { tokenMiddleware, sellerMiddleware } = require('../middlewares');
const { sellerController } = require('../controllers');

sellerRouter.use(tokenMiddleware);
sellerRouter.get('/search', sellerMiddleware.isNameValid, sellerController.findByName);
sellerRouter.get('/email', sellerMiddleware.isEmailValid, sellerController.findByEmail);
sellerRouter.get('/cpf', sellerMiddleware.isRegisterValid, sellerController.findById);

module.exports = sellerRouter;