'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Inserindo registros na tabela
    await queryInterface.bulkInsert('cars',
    [
      {
        model: 'T-Cross',
        brand: 'Volkswagen',
        version: 'Highline 250 TSI',
        purchase_price: 100000.00,
        sale_price: 121999.00,
        model_year: 2022,
        manufacture_year: 2021,
        plate: 'ABC-1234',
        color: 'Vermelho',
        type: 'SUV',
        isAvailable: true,
      },
      {
        model: 'Corolla',
        brand: 'Toyota',
        version: 'XEI 2.0',
        purchasePrice: 90000.00,
        salePrice: 131200.00,
        model_year: 2020,
        manufacture_year: 2019,
        plate: 'DEF-5678',
        color: 'Preto',
        type: 'Sedã',
        isAvailable: false
      },
      {
        model: 'Civic',
        brand: 'Honda',
        version: 'Touring 1.5',
        purchasePrice: 900000.00,
        salePrice: 138000.00,
        model_year: 2021,
        manufacture_year: 2020,
        plate: 'GHI-9012',
        color: 'Branco',
        type: 'Sedã',
        isAvailable: false
      },
      {
        model: 'Compass',
        brand: 'Jeep',
        version: 'Longitude 2.0',
        purchasePrice: 110000.00,
        salePrice: 145399.00,
        model_year: 2022,
        manufacture_year: 2021,
        plate: 'JKL-3456',
        color: 'Cinza',
        type: 'SUV',
        isAvailable: false
      },
      {
        model: 'Onix',
        brand: 'Chevrolet',
        version: 'LTZ 1.0',
        purchasePrice: 40500.00,
        salePrice: 65799.00,
        model_year: 2018,
        manufacture_year: 2018,
        plate: 'MNO-7890',
        color: 'Prata',
        type: 'Hatch',
        isAvailable: true
      },
      {
        model: 'HB20',
        brand: 'Hyundai',
        version: 'Diamond 1.6',
        purchasePrice: 50000.00,
        salePrice: 72999.00,
        model_year: 2016,
        manufacture_year: 2015,
        plate: 'PQR-1234',
        color: 'Azul',
        type: 'Hatch',
        isAvailable: true,
      },
      {
        model: 'Kicks',
        brand: 'Nissan',
        version: 'SL 1.6',
        purchasePrice: 100000.00,
        salePrice: 133200.00,
        model_year: 2023,
        manufacture_year: 2023,
        plate: 'STU-5678',
        color: 'Vermelho',
        type: 'SUV',
        isAvailable: true
      },
      {
        model: 'Renegade',
        brand: 'Jeep',
        version: 'Sport 1.8',
        purchasePrice: 900000.00,
        salePrice: 138000.00,
        model_year: 2021,
        manufacture_year: 2020,
        plate: 'VWX-9012',
        color: 'Preto',
        type: 'SUV',
        isAvailable: false
      },
      {
        model: 'Gol',
        brand: 'Volkswagen',
        version: 'Trendline 1.0',
        purchasePrice: 40500.00,
        salePrice: 65799.00,
        model_year: 2018,
        manufacture_year: 2018,
        plate: 'YZA-3456',
        color: 'Prata',
        type: 'Hatch',
        isAvailable: true
      },
      {
        model: 'Creta',
        brand: 'Hyundai',
        version: 'Prestige 2.0',
        purchasePrice: 110000.00,
        salePrice: 145399.00,
        model_year: 2022,
        manufacture_year: 2021,
        plate: 'BCD-7890',
        color: 'Cinza',
        type: 'SUV',
        isAvailable: true
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    // Deletando todos os registros da tabela
    await queryInterface.bulkDelete('cars', null, {});
    // Deleta com base em registros específicos
    // await Car.destroy({ where: {} });
  },
};
