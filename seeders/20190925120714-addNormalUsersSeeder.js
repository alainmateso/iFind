import hashHelper from '../helpers/hashHelper';


module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.bulkInsert('users', [
      {
        first_name: 'John',
        last_name: 'Doe',
        phonenumber: 'Doe',
        email: 'johndoe@anonymous.com',
        password: hashHelper('thisismypassword'),
      },
    ], {}),
  ]),

  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.bulkDelete('users', null, {}),
  ]),
};
