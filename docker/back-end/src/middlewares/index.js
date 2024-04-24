const tokenMiddleware = require('./token.middleware');
const carMiddleware = require('./car.middleware');
const loginMiddleware = require('./login.middleware');
const clientMiddleware = require('./client.middleware');
const sellerMiddleware = require('./seller.middleware');

module.exports = {
  tokenMiddleware,
  carMiddleware,
  loginMiddleware,
  clientMiddleware,
  sellerMiddleware,
};