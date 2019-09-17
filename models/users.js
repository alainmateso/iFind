module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    email: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
  }, {});
  Users.associate = function (models) {
    // associations can be defined here
  };
  return Users;
};
