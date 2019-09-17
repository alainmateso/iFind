module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    instanceMethods: {
      toJSON() {
        const values = { ...this.get() };
        delete values.password;
        return values;
      },
    },
  });
  Users.associate = function (models) {
    // associations can be defined here
  };
  return Users;
};
