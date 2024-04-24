const addressModel = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    addressId: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'address_id',
    },
    street: DataType.STRING,
    number: DataType.INTEGER,
    complement: DataType.STRING,
    zipCode: DataType.STRING,
    neighborhood: DataType.STRING,
    city: DataType.STRING,
    state: DataType.STRING,
    country: DataType.STRING,
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
  },
  {
    tableName: 'address',
    timestamps: false,
    underscored: true,
  });

  Address.associate = (models) => {
    Address.belongsTo(models.Client, {
      foreignKey: 'client_id',
      as: 'clients',
    });
    Address.belongsTo(models.Seller, {
      foreignKey: 'seller_id',
      as: 'sellers',
    });
  }

  return Address;
};

module.exports = addressModel;
