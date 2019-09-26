
module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.bulkInsert('posts', [
      {
        user_id: 1,
        description: 'This is a demo post one. This post does the awesome post things. No post is more awesomer than this.',
        category_id: 1,
        resolved: false,
        type: 'lost',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        description: 'This is a demo post two! This post does the awesome post things. No post is more awesomest than this.',
        category_id: 2,
        resolved: false,
        type: 'found',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {}),
  ]),

  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.bulkDelete('posts', null, {}),
  ]),
};