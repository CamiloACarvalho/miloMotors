const sellerModel = (sequelize, DataType) => {
  // Essa constante começa com maiúscula porque se trata de uma CLASSE
  const Seller = sequelize.define('Seller', {
    sellerId: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'seller_id',
    },
    fullName: DataType.STRING(100),
    password: DataType.STRING(16),
    birthday: DataType.DATE,
    cpf: DataType.STRING,
    nacionality: DataType.STRING,
    phoneNumber: DataType.STRING,
    email: DataType.STRING,
    gender: DataType.STRING,
    jobOccupation: DataType.STRING,
    bank: DataType.STRING,
    commission: DataType.DECIMAL(20, 2),
    salesQuantity: DataType.INTEGER,
    addressId: {
      type: DataType.INTEGER,
      allowNull: false,
      foreignKey: 'address_id',
      as: 'addressId',
      field: 'address_id',
    },
  },
  {
    tableName: 'sellers',
    timestamps: false,
    underscored: true,
  });

  Seller.associate = (models) => {
    // Definindo a relação entre vendas e vendedores: um vendedor pode ter várias vendas
    Seller.hasMany(models.Sale, {
      foreignKey: 'seller',
      as: 'seller',
    });
    // Definindo a relação entre vendedores e endereços: um vendedor pode ter um único endereço
    Seller.belongsTo(models.Address, {
      foreignKey: 'address_id',
      as: 'address',
    });
  }

  return Seller;
};

module.exports = sellerModel;