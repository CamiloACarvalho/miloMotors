import { Model, QueryInterface, DataTypes } from 'sequelize'; 

import { ClientType } from '../types/client';

export default {
  up (queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<ClientType>>('clients', {
      clientId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'client_id'
      },
      fullName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'full_name'
      },
      birthday: {
        allowNull: false,
        type: DataTypes.DATE
      },
      cpf: {
        allowNull: false,
        type: DataTypes.STRING
      },
      cnh: {
        allowNull: false,
        type: DataTypes.STRING
      },
      gender: {
        allowNull: false,
        type: DataTypes.STRING
      },
      nacionality: {
        allowNull: false,
        type: DataTypes.STRING(30),
      },
      phoneNumber: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'phone_number'
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      profession: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      salary: {
        allowNull: false,
        type: DataTypes.DECIMAL(20, 2)
      },
      bank: {
        allowNull: false,
        type: DataTypes.STRING
      },
      timesPurchased: {
        type: DataTypes.INTEGER,
        field: 'times_purchased'
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      addressId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'address_id',
        references: {
          model: 'Address',
          key: 'address_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
    });
  },

  down (queryInterface: QueryInterface) {
    return queryInterface.dropTable('clients');
  },
};
