import { Model, QueryInterface, DataTypes } from 'sequelize'; 

import { SaleCarType } from '../types/salCar';

export default {
  up (queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<SaleCarType>>('sale_cars', {
      saleId: {
        type: DataTypes.INTEGER,
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
        type: DataTypes.INTEGER,
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
        type: DataTypes.INTEGER,
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
        type: DataTypes.INTEGER,
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
 
  down (queryInterface: QueryInterface) {
    return queryInterface.dropTable('sale_cars');
  }
};
 