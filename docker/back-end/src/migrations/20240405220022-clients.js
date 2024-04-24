'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('clients', {
      clientId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'client_id'
      },
      fullName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'full_name'
      },
      birthday: {
        allowNull: false,
        type: Sequelize.DATE
      },
      cpf: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cnh: {
        allowNull: false,
        type: Sequelize.STRING
      },
      gender: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nacionality: {
        allowNull: false,
        type: Sequelize.STRING(30),
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
      profession: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      salary: {
        allowNull: false,
        type: Sequelize.DECIMAL(20, 2)
      },
      bank: {
        allowNull: false,
        type: Sequelize.STRING
      },
      timesPurchased: {
        type: Sequelize.INTEGER,
        field: 'times_purchased'
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('clients');
  },
};
