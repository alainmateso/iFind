
module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.bulkInsert('users', [{
      first_name: 'caret',
      last_name: 'devs',
      email: 'caretdevs@gmail.com',
      phonenumber: '1234567890',
      password: '$2b$08$GBLTqNmKrrRLUEpMOmClZOupwxgKNT05YDCZdwOCw5KNRUyW6/9MG',
      is_admin: true,
      is_verified: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {}),
  ]),

  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.bulkDelete('users', null, {}),
  ]),
};
