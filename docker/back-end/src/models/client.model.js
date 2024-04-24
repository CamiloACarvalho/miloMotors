const clientModel = (sequelize, DataType) => {
  const Client = sequelize.define('Client', {
    clientId: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'client_id',
    },
    fullName: DataType.STRING,
    birthday: DataType.DATE,
    cpf: DataType.STRING,
    cnh: DataType.STRING,
    gender: DataType.STRING,
    nacionality: DataType.STRING,
    phoneNumber: DataType.STRING,
    email: DataType.STRING,
    profession: DataType.STRING,
    salary: DataType.DECIMAL(20, 2),
    bank: DataType.STRING,
    timesPurchased: DataType.INTEGER,
    password: DataType.STRING,
    addressId: {
      type: DataType.INTEGER,
      allowNull: false,
      foreignKey: 'address_id',
      as: 'addressId',
      field: 'address_id',
    },
  },
  {
    tableName: 'clients',
    timestamps: false,
    underscored: true,
  });

  Client.associate = (models) => {
    // Definindo a relação entre vendas e clientes: um cliente pode ter várias vendas
    Client.hasMany(models.Sale, {
      foreignKey: 'client',
      as: 'client',
    });
    // Definindo a relação entre clientes e endereços: um cliente pode ter um único endereço
    Client.belongsTo(models.Address, {
      foreignKey: 'address_id',
      as: 'address',
    });
  };

  return Client;
};

module.exports = clientModel;