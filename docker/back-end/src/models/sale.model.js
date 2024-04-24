const saleModel = (sequelize, DataType) => {
  const Sale = sequelize.define('Sale', {
    saleId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataType.INTEGER,
      field: 'sale_id'
    },
    value: DataType.DECIMAL(20, 2),
    payment: DataType.STRING,
    commission: DataType.DECIMAL(20, 2),
    clientId: {
      type: DataType.INTEGER,
      allowNull: false,
      foreignKey: 'client_id',
      as: 'clientId',
      field: 'client_id',
    },
    sellerId: {
      type: DataType.INTEGER,
      allowNull: false,
      foreignKey: 'seller_id',
      as: 'sellerId',
      field: 'seller_id',
    },
    carId: {
      type: DataType.INTEGER,
      allowNull: false,
      foreignKey: 'car_id',
      as: 'carId',
      field: 'car_id',
    },
  },
  {
    tableName: 'sales',
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
    underscored: true,
  });

  Sale.associate = (models) => {
    // Definindo a relação entre vendas e clientes: uma venda pode ter um único cliente
    Sale.belongsTo(models.Client, {
      foreignKey: 'client_id',
      as: 'clients',
    });
    Sale.belongsTo(models.Seller, {
      foreignKey: 'seller_id',
      as: 'sellers',
    });
    Sale.belongsTo(models.Car, {
      foreignKey: 'car_id',
      as: 'cars',
    });
  };

  return Sale;
};

module.exports = saleModel;