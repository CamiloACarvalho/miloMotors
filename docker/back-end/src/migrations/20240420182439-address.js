'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('adresses', { 
      addressId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'address_id',
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      number: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      complement: {
        type: Sequelize.STRING,
      },
      zipCode: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'zip_code',
      },
      neighborhood: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      country: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      clientId: {
        type: Sequelize.INTEGER,
        field: 'client_id',
        foringKey: true,
        references: {
          model: 'Client',
          key: 'client_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      sellerId: {
        type: Sequelize.INTEGER,
        field: 'seller_id',
        foringKey: true,
        references: {
          model: 'Seller',
          key: 'seller_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('adresses');
  }
};
