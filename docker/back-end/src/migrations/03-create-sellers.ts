import { Model, QueryInterface, DataTypes } from 'sequelize'; 

import { SellerType } from '../types/seller';

export default {
  up (queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<SellerType>>('sellers', {
      sellerId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'seller_id'
      },
      fullName: {
        allowNull: false,
        type: DataTypes.STRING(100),
        field: 'full_name'
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(16),
      },
      birthday: {
        allowNull: false,
        type: DataTypes.DATE
      },
      cpf: {
        allowNull: false,
        type: DataTypes.STRING
      },
      nacionality: {
        allowNull: false,
        type: DataTypes.STRING,
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
      gender: {
        allowNull: false,
        type: DataTypes.STRING
      },
      jobOccupation: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'job_occupation'
      },
      bank: {
        allowNull: false,
        type: DataTypes.STRING
      },
      commission: {
        allowNull: false,
        type: DataTypes.DECIMAL(20, 2)
      },
      salesQuantity: {
        type: DataTypes.INTEGER,
        field: 'sales_quantity'
      },
      addressId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'address_id',
        // foringKey: true,
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
    return queryInterface.dropTable('sellers');
  }
};
