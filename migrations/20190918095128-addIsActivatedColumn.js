module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('users', 'is_active', {
      type: Sequelize.STRING,
      allowNullL: false,
      defaultValue: true,
    }),
  ]),
  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.removeColumn('users', 'is_active'),
  ]),
};
