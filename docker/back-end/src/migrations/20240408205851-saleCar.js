'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sale_cars', {
      saleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'sale_id',
        references: {
          model: 'Sales',
          key: 'sale_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      sellerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'serller_id',
        references: {
          model: 'Seller',
          key: 'serller_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      clientId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'client_id',
        references: {
          model: 'Client',
          key: 'client_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      carId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'car_id',
        references: {
          model: 'Cars',
          key: 'car_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
    });
  },
 
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('sale_cars');
  }
};
 