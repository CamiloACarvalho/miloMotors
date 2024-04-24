import { Model, QueryInterface, DataTypes } from 'sequelize'; 

import { SaleType } from '../types/sale';

export default {
  up (queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<SaleType>>('sales', {
      saleId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'sale_id'
      },
      value: {
        allowNull: false,
        type: DataTypes.DECIMAL(20, 2)
      },
      payment: {
        allowNull: false,
        type: DataTypes.STRING
      },
      commission: {
        allowNull: false,
        type: DataTypes.DECIMAL(20, 2)
      },
      clientId: {
        type: DataTypes.INTEGER,
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
        type: DataTypes.INTEGER,
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
        type: DataTypes.INTEGER,
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

  down (queryInterface: QueryInterface) {
    return queryInterface.dropTable('sales');
  }
};
