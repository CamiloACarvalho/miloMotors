'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sellers', {
      sellerId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'seller_id'
      },
      fullName: {
        allowNull: false,
        type: Sequelize.STRING(100),
        field: 'full_name'
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(16),
      },
      birthday: {
        allowNull: false,
        type: Sequelize.DATE
      },
      cpf: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nacionality: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      phoneNumber: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'phone_number'
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      gender: {
        allowNull: false,
        type: Sequelize.STRING
      },
      jobOccupation: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'job_occupation'
      },
      bank: {
        allowNull: false,
        type: Sequelize.STRING
      },
      commission: {
        allowNull: false,
        type: Sequelize.DECIMAL(20, 2)
      },
      salesQuantity: {
        type: Sequelize.INTEGER,
        field: 'sales_quantity'
      },
      addressId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'address_id',
        foringKey: true,
        references: {
          model: 'Address',
          key: 'address_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('sellers');
  }
};
