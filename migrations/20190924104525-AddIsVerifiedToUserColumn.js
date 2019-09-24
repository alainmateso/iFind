
module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('users', 'is_verified', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('users', 'is_verified');
  },
};
