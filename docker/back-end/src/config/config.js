const options = {
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.MYSQL_DB_NAME || 'ShopCar',
  username: process.env.MYSQL_USER || 'root',
  port: process.env.MYSQL_PORT || '3306',
  host: process.env.MYSQL_HOST || 'localhost',
  dialect: 'mysql',
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
};
