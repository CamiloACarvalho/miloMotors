const { Op } = require('sequelize');
const { Seller } = require('../models');

const changeYeare = (date) => {
  // Extrair apenas o ano da string de data
  const year = new Date(date).getFullYear();
  // Calcular a idade subtraindo o ano de nascimento do ano atual
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  return age;
};

const findByName = async (name) => {
  const sellers = await Seller.findAll({
    where: {
      fullName: { [Op.like]: `%${name}%` }
    }
  });
  const infosellers = sellers.map(seller => ({
    register: seller.sellerId,
    name: seller.fullName,
    email: seller.email,
    phone: seller.phone,
    age: changeYeare(seller.birthday),
    salesQuantity: (seller.salesQuantity !== null ? seller.salesQuantity : 'Não realizou nenhuma venda até o momento'),
  }));
  return infosellers;
};

const findByEmail = async (email) => {
  const seller = await Seller.findAll({
    where: {
      email
    }
  });
  const infoseller = seller.map(sel => ({
    register: sel.sellerId,
    name: sel.fullName,
    email: sel.email,
    phone: sel.phone,
    age: changeYeare(sel.birthday),
    salesQuantity: (sel.salesQuantity !== null ? sel.salesQuantity : 'Não realizou nenhuma venda até o momento'),
  }));
  return infoseller;
};

const findByRegister = async (id) => {
  const seller = await Seller.findByPk(id);
  const infoseller = {
    register: seller.sellerId,
    name: seller.fullName,
    email: seller.email,
    phone: seller.phone,
    age: changeYeare(seller.birthday),
    salesQuantity: (seller.salesQuantity !== null ? seller.salesQuantity : 'Não realizou nenhuma venda até o momento'),
  };
  return infoseller;
}

module.exports = {
  findByName,
  findByEmail,
  findByRegister,
};