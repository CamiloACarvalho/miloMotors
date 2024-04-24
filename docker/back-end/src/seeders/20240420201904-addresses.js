'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('adresses', 
    [
      {
        street: 'Rua dos desenvolvedores',
        number: 123,
        complement: 'Casa',
        zip_code: '12345-678',
        neighborhood: 'Caiçara',
        city: 'Belo Horizonte',
        state: 'Minas Gerais',
        country: 'Brasil',
        client_id: 1,
      },
      {
        street: 'Rua dos analistas',
        number: 456,
        complement: 'Apto 101',
        zip_code: '54321-876',
        neighborhood: 'Centro',
        city: 'Porto Alegre',
        state: 'rio Grande do Sul',
        country: 'Brasil',
        client_id: 2,
      },
      {
        street: 'Rua dos advogados',
        number: 789,
        complement: 'Sala 2',
        zip_code: '98765-432',
        neighborhood: 'São José',
        city: 'São Paulo',
        state: 'São Paulo',
        country: 'Brasil',
        client_id: 3,
      },
      {
        street: 'Rua dos médicos',
        number: 101,
        complement: 'Sala 1',
        zip_code: '19283-456',
        neighborhood: 'Centro',
        city: 'Rio de Janeiro',
        state: 'Rio de Janeiro',
        country: 'Brasil',
        client_id: 4,
      },
      {
        street: 'Rua dos militares',
        number: 112,
        complement: 'Casa 2',
        zip_code: '12345-678',
        neighborhood: 'Vila dos militares',
        city: 'Belo Horizonte',
        state: 'Minas Gerais',
        country: 'Brasil',
        client_id: 5,
      },
      {
        street: 'Planalto Central',
        number: 2469,
        complement: 'Gabinete 24',
        zip_code: '54321-876',
        neighborhood: 'Centro',
        city: 'Brasília',
        state: 'Distrito Federal',
        country: 'Brasil',
        client_id: 6,
      },
      {
        street: 'Rua das mangabeiras',
        number: 12547,
        complement: 'Prédio 2, Apto 101',
        zip_code: '98765-432',
        neighborhood: 'Jardim das flores',
        city: 'Rio de Janeiro',
        state: 'Rio de Janeiro',
        country: 'Brasil',
        client_id: 7,
      },
      {
        street: 'Rua dos grandes escritores',
        number: 456,
        complement: 'Casa',
        zip_code: '54646-678',
        neighborhood: 'Centro',
        city: 'São Paulo',
        state: 'São Paulo',
        country: 'Brasil',
        client_id: 8,
      },
      {
        street: 'Avenida Vilas Perdidas do Norte',
        number: 789,
        complement: 'Apto 432',
        zip_code: '44521-432',
        neighborhood: 'Vila dos artistas',
        city: 'Salvador',
        state: 'Bahia',
        country: 'Brasil',
        client_id: 9,
      },
      {
        street: 'Avenida das Nações Unidas',
        number: 101,
        zip_code: '19283-456',
        neighborhood: 'Centro',
        city: 'Caxias do Sul',
        state: 'Rio Grande do Sul',
        country: 'Brasil',
        client_id: 10,
      },
      {
        street: 'Rua Floriano Peixoto',
        number: 112,
        complement: 'Apto 101',
        zip_code: '36232-123',
        neighborhood: 'Centro',
        city: 'Juiz de Fora',
        state: 'Minas Gerais',
        country: 'Brasil',
        seller_id: 1,
      },
      {
        street: 'Avenida Rio Branco',
        number: 5032,
        complement: 'Apto 230',
        zip_code: '36232-555',
        neighborhood: 'Centro',
        city: 'Juiz de Fora',
        state: 'Minas Gerais',
        country: 'Brasil',
        seller_id: 2,
      },
      {
        street: 'Rua Professor João Jardins',
        number: 154,
        complement: 'Casa',
        zip_code: '36212-100',
        neighborhood: 'Santa Terezinha',
        city: 'Juiz de Fora',
        state: 'Minas Gerais',
        country: 'Brasil',
        seller_id: 3,
      },
      {
        street: 'Rua Engenheiro José Carlos',
        number: 35,
        complement: 'Apto 604',
        zip_code: '36130-033',
        neighborhood: 'Benfica',
        city: 'Juiz de Fora',
        state: 'Minas Gerais',
        country: 'Brasil',
        seller_id: 4,
      },
      {
        street: 'Avenida dos Andradas',
        number: 542,
        complement: 'Apto 1301',
        zip_code: '36251-133',
        neighborhood: 'Mariano Procópio',
        city: 'Juiz de Fora',
        state: 'Minas Gerais',
        country: 'Brasil',
        seller_id: 5,
      },
      {
        street: 'Avenida Japiassu',
        number: 586,
        complement: 'Apto 302',
        zip_code: '36230-178',
        neighborhood: 'Cascarinha',
        city: 'Juiz de Fora',
        state: 'Minas Gerais',
        country: 'Brasil',
        seller_id: 6,
      },
    
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('adresses', null, {});
  }
};
