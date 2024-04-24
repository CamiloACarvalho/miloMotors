// Preciso criar uma forma de exportar as informações que quero da tabela
// Lembrando que ainda não são as funções de busca, isso é antes. Aqui quando uma função de busca solicitar a informção é com base nisso que será exibido
const carModel = (sequelize, DataTypes) => {
  const Car = sequelize.define('Car', {
    carId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'car_id',
    },
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    version: DataTypes.STRING,
    plate: DataTypes.STRING,
    manufactureYear: DataTypes.INTEGER,
    modelYear: DataTypes.INTEGER,
    color: DataTypes.STRING,
    type: DataTypes.STRING,
    purchasePrice: DataTypes.DECIMAL(20, 2),
    salePrice: DataTypes.DECIMAL(20, 2),
    isAvailable: DataTypes.BOOLEAN,
  },
  {
    tableName: 'cars',
    timestamps: false,
    underscored: true,
  });
  return Car;
};

module.exports = carModel;