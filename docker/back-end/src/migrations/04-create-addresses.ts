import { Model, QueryInterface, DataTypes } from 'sequelize'; 

import { AddressType } from '../types/address';

export default {
  up (queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<AddressType>>('adresses', { 
      addressId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'address_id',
      },
      street: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      number: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      complement: {
        type: DataTypes.STRING,
      },
      zipCode: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'zip_code',
      },
      neighborhood: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      city: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      state: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      country: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      clientId: {
        type: DataTypes.INTEGER,
        field: 'client_id',
        references: {
          model: 'Client',
          key: 'client_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      sellerId: {
        type: DataTypes.INTEGER,
        field: 'seller_id',
        references: {
          model: 'Seller',
          key: 'seller_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  down (queryInterface: QueryInterface) {
    return queryInterface.dropTable('adresses');
  }
};
