'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      type: DataTypes.ENUM(
        'admin',
        'shopkeeper',
        'customer',
        'restaurant_admin'
      ),
      id_number: DataTypes.INTEGER,
      name: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      email: DataTypes.STRING,
      hash: DataTypes.STRING,
      salt: DataTypes.STRING,
      token: DataTypes.STRING(1000),
      last_interaction_date: DataTypes.DATE
    },
    {}
  );
  User.associate = function(models) {
    User.hasOne(models.Shopkeeper, {
      foreignKey: 'user_id',
      as: 'Shopkeeper'
    });
    User.hasOne(models.RestaurantAdmin, {
      foreignKey: 'user_id',
      as: 'RestaurantAdmin'
    });
    User.hasOne(models.Customer, {
      foreignKey: 'user_id',
      as: 'Customer'
    });
  };
  return User;
};
