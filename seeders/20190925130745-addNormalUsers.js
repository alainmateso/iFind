
module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.bulkInsert('users', [
      {
        first_name: 'john',
        last_name: 'doe',
        email: 'johndoe@gmail.com',
        phonenumber: '0789125628',
        password: '$2b$08$GBLTqNmKrrRLUEpMOmClZOupwxgKNT05YDCZdwOCw5KNRUyW6/9MG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'jane',
        last_name: 'doe',
        email: 'janedoe@gmail.com',
        phonenumber: '0789125628',
        password: '$2b$08$GBLTqNmKrrRLUEpMOmClZOupwxgKNT05YDCZdwOCw5KNRUyW6/9MG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {}),
  ]),

  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.bulkDelete('users', null, {}),
  ]),
};
