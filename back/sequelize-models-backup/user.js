'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    type: DataTypes.ENUM('administrator', 'rappitendero', 'client'),
    id_number: DataTypes.INTEGER,
    name: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasOne(models.Address, {
      foreignKey: 'user_id',
      onDelete: 'cascade',
      hooks: true
    });
    User.hasOne(models.ShoppingCar, {
      foreignKey: 'user_id',
      as: 'shoppingCar',
    });
    User.hasMany(models.Order, {
      foreignKey: 'user_id',
      as: 'orders',
      onDelete: 'cascade'
    });
  };
  return User;
};
