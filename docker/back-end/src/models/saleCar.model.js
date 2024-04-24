const saleCarModel = (sequelize, DataTypes) => {
  const SaleCar = sequelize.define('SaleCar', {
    saleId: {
      foreignKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'sale_id',
      references: {
        model: 'Sale',
        key: 'sale_id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    sellerId: {
      foreignKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'seller_id',
      references: {
        model: 'Seller',
        key: 'seller_id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    clientId: {
      foreignKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'client_id',
      references: {
        model: 'Client',
        key: 'client_id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    carId: {
      foreignKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'car_id',
      references: {
        model: 'Car',
        key: 'car_id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  },
  {
    tableName: 'SaleCar',
    timestamps: false,
    underscored: true,
  });

  SaleCar.associate = (models) => {
    models.Car.belongsToMany(models.Sale, {
      through: models.SaleCar,
      foreignKey: 'sale_id',
      otherKey: 'car_id',
      as: 'sales',
    });
    models.Sale.belongsTo(models.Car, {
      through: models.SaleCar,
      foreignKey: 'car_id',
      otherKey: 'sale_id',
      as: 'cars',
    });
    models.Client.belongsToMany(models.Sale, {
      through: models.SaleCar,
      foreignKey: 'sale_id',
      otherKey: 'client_id',
      as: 'sales',
    });
    models.Sale.belongsTo(models.Client, {
      through: models.SaleCar,
      foreignKey: 'client_id',
      otherKey: 'sale_id',
      as: 'clients',
    });
    models.Seller.belongsToMany(models.Sale, {
      through: models.SaleCar,
      foreignKey: 'sale_id',
      otherKey: 'seller_id',
      as: 'sales',
    });
    models.Sale.belongsTo(models.Seller, {
      through: models.SaleCar,
      foreignKey: 'seller_id',
      otherKey: 'sale_id',
      as: 'sellers',
    });
  }

  return SaleCar;
};

module.exports = saleCarModel;
