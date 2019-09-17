
module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    user_id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    resolved: DataTypes.BOOLEAN,
    type: DataTypes.STRING,
  }, {});
  Posts.associate = function (models) {
    // associations can be defined here
  };
  return Posts;
};
