import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('sale_cars',
    [
      {
        sale_id: 1,
        seller_id: 2,
        client_id: 1,
        car_id: 2,
      },
      {
        sale_id: 2,
        seller_id: 2,
        client_id: 2,
        car_id: 3,
      },
      {
        sale_id: 3,
        seller_id: 4,
        client_id: 5,
        car_id: 4,
      },
      {
        sale_id: 5,
        seller_id: 4,
        client_id: 7,
        car_id: 7,
      },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('sale_cars', {});
  }
};
