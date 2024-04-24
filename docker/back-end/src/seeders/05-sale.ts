import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('sales',
    [
      {
        value: 131200.00,
        payment: 'À vista',
        comission: 3000.00,
        client_id: 1,
        seller_id: 2,
        car_id: 2,
      },
      {
        value: 138000.00,
        payment: 'Entrada + 48x',
        comission: 5000.00,
        client_id: 2,
        seller_id: 2,
        car_id: 3,
      },
      {
        value: 145399.00,
        payment: 'Financiamento em 60x',
        comission: 6300.00,
        client_id: 5,
        seller_id: 4,
        car_id: 4,
      },
      {
        value: 65799.00,
        payment: 'À vista',
        comission: 2350.00,
        client_id: 7,
        seller_id: 4,
        car_id: 7,
      }
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('sales', {});
  }
};
