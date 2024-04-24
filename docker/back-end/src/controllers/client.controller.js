const { clientService } = require('../services');

const findByName = async (request, response) => {
  const name = request.query.q;
  const client = await clientService.findByName(name);
  if (client.length === 0) {
    return response.status(404).json({ message: 'Client not found' });
  };
  response.status(200).json(client);
};

const findByEmail = async (request, response) => {
  const { email } = request.body;
  const client = await clientService.findByEmail(email);
  if (client.length === 0) {
    return response.status(404).json({ message: 'Client not found' });
  };
  response.status(200).json(client);
};

const findByCpf = async (request, response) => {
  const { cpf } = request.body;
  const client = await clientService.findByCpf(cpf);
  if (client.length === 0) {
    return response.status(404).json({ message: 'Client not found' });
  };
  response.status(200).json(client);
};

module.exports = {
  findByName,
  findByEmail,
  findByCpf,
};