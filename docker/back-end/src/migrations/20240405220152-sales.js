'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      saleId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'sale_id'
      },
      value: {
        allowNull: false,
        type: Sequelize.DECIMAL(20, 2)
      },
      payment: {
        allowNull: false,
        type: Sequelize.STRING
      },
      commission: {
        allowNull: false,
        type: Sequelize.DECIMAL(20, 2)
      },
      clientId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'client_id',
        references: {
          model: 'Clients',
          key: 'client_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      sellerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'seller_id',
        references: {
          model: 'Sellers',
          key: 'seller_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      carId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'car_id',
        references: {
          model: 'Car',
          key: 'car_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('sales');
  }
};
