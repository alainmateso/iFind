
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('category', [{
    name: 'Electronics',
    description: 'All things electrical. Phones, etc.',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    name: 'Clothes',
    description: 'All your swag',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Govt Issued Docs',
    description: 'Passports etc',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('category', null, {}),
};
