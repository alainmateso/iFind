
module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('posts', {
    user_id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    resolved: DataTypes.BOOLEAN,
    type: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {});
  Posts.associate = function (models) {
    // associations can be defined here
    Posts.belongsTo(models.users, {
      as: 'user',
      foreignKey: 'user_id',
      targetKey: 'id',
    });
  };
  return Posts;
};
