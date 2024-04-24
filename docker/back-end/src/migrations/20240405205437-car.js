'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('cars', {
      carId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'car_id'
      },
      brand: {
        allowNull: false,
        type: Sequelize.STRING
      },
      model: {
        allowNull: false,
        type: Sequelize.STRING
      },
      version: {
        type: Sequelize.STRING
      },
      plate: {
        allowNull: false,
        type: Sequelize.STRING
      },
      manufactureYear: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'manufacture_year'
      },
      modelYear: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'model_year'
      },
      color: {
        allowNull: false,
        type: Sequelize.STRING
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING
      },
      purchasePrice: {
        allowNull: false,
        type: Sequelize.DECIMAL(20, 2),
        field: 'purchase_price',
      },
      salePrice: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'sale_price'
      },
      isAvailable: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        field: 'is_available'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('cars');
  }
};
