
module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.bulkInsert('users', [{
      first_name: process.env.ADMIN_FIRSTNAME,
      last_name: process.env.ADMIN_LASTNAME,
      email: process.env.ADMIN_EMAIL,
      phonenumber: process.env.ADMIN_PHONENUMBER,
      password: '$2b$08$GBLTqNmKrrRLUEpMOmClZOupwxgKNT05YDCZdwOCw5KNRUyW6/9MG',
      is_admin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {}),
  ]),

  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.bulkDelete('users', null, {}),
  ]),
};
