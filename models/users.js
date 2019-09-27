module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    password: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
    is_admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    is_verified: DataTypes.BOOLEAN,
  }, {});
  Users.associate = function (models) {
    // associations can be defined here

  };
  return Users;
};
