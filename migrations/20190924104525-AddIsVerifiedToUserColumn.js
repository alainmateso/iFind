
module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('users', 'is_verified', {
      type: Sequelize.BOOLEAN,
      allowNullL: false,
      defaultValue: false,
    }),
  ]),
  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.removeColumn('users', 'is_verified'),
  ]),
};
