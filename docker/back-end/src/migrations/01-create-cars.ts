import { Model, QueryInterface, DataTypes } from 'sequelize'; 

import { CarType } from '../types/car';

export default {
  up (queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<CarType>>('cars', {
      carId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'car_id'
      },
      brand: {
        allowNull: false,
        type: DataTypes.STRING
      },
      model: {
        allowNull: false,
        type: DataTypes.STRING
      },
      version: {
        type: DataTypes.STRING
      },
      plate: {
        allowNull: false,
        type: DataTypes.STRING
      },
      manufactureYear: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'manufacture_year'
      },
      modelYear: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'model_year'
      },
      color: {
        allowNull: false,
        type: DataTypes.STRING
      },
      type: {
        allowNull: false,
        type: DataTypes.STRING
      },
      purchasePrice: {
        allowNull: false,
        type: DataTypes.DECIMAL(20, 2),
        field: 'purchase_price',
      },
      salePrice: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'sale_price'
      },
      isAvailable: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        field: 'is_available'
      }
    });
  },

  down (queryInterface: QueryInterface) {
    return queryInterface.dropTable('cars');
  }
};
