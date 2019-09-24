
module.exports = (sequelize, DataTypes) => {
  const VericationToken = sequelize.define('VericationToken', {
    userId: DataTypes.INTEGER,
    token: DataTypes.STRING,
  }, {
    classMethods: {
      associate(models) {
        verificationtoken.belongsTo(models.users, {
          as: 'user',
          foreignKey: 'userId',
          foreignKeyConstraint: true,
        });
      },
    },
  });
  VericationToken.associate = function (models) {
    // associations can be defined here
  };
  return VericationToken;
};
