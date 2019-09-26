module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('posts', 'image', {
      type: Sequelize.STRING,
      allowNullL: false,
    }),
  ]),
  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.removeColumn('posts', 'image'),
  ]),
};
