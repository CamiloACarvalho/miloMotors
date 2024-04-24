const { Op } = require('sequelize');
const { Client } = require('../models');

const changeYeare = (date) => {
  // Extrair apenas o ano da string de data
  const year = new Date(date).getFullYear();
  // Calcular a idade subtraindo o ano de nascimento do ano atual
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  return age;
};

const findByName = async (name) => {
  const clients = await Client.findAll({
    where: {
      fullName: { [Op.like]: `%${name}%` }
    }
  });
  const infoClients = clients.map(client => ({
    register: client.clientId,
    name: client.fullName,
    email: client.email,
    phone: client.phone,
    profession: client.profession,
    age: changeYeare(client.birthday),
    salary: `R$${ client.income }`,
    timePurchased: (client.timesPurchased !== null ? client.timesPurchased : 'Não comprou nenhum carro'),
  }));
  return infoClients;
};

const findByEmail = async (email) => {
  const client = await Client.findAll({
    where: {
      email
    }
  });
  const infoClient = client.map(cli => ({
    register: cli.clientId,
    name: cli.fullName,
    email: cli.email,
    phone: cli.phone,
    profession: cli.profession,
    age: changeYeare(cli.birthday),
    salary: `R$${ cli.income }`,
    timePurchased: (cli.timesPurchased !== null ? cli.timesPurchased : 'Não comprou nenhum carro'),
  }));
  return infoClient;
};

const findByCpf = async (cpf) => {
  const client = await Client.findAll({
    where: {
      cpf
    }
  });
  const infoClient = client.map(cli => ({
    register: cli.clientId,
    name: cli.fullName,
    email: cli.email,
    phone: cli.phone,
    profession: cli.profession,
    age: changeYeare(cli.birthday),
    salary: `R$${ cli.income }`,
    timePurchased: (cli.timesPurchased !== null ? cli.timesPurchased : 'Não comprou nenhum carro'),
  }));
  return infoClient;
};
module.exports = {
  findByName,
  findByEmail,
  findByCpf,
};