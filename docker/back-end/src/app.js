const express = require('express');
const {
  carRoute,
  loginRoute,
  clientRoute,
  sellerRoute,
} = require('./routes');
// ...
const app = express();

app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', loginRoute);
app.use('/car', carRoute);
app.use('/client', clientRoute);
app.use('/seller', sellerRoute);

module.exports = app;
