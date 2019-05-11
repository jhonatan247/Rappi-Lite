'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    type: DataTypes.ENUM('admin', 'shopkeeper', 'customer', 'restaurant_admin'),
    id_number: DataTypes.INTEGER,
    name: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {});
  User.associate = function(models) {
    User.hasOne(models.Shopkeeper, {
      foreignKey: 'user_id'
    });
    User.hasOne(models.RestaurantAdmin, {
      foreignKey: 'user_id'
    });
    User.hasOne(models.Customer, {
      foreignKey: 'user_id'
    });
  };
  return User;
};
