'use strict';
module.exports = (sequelize, DataTypes) => {
  const RestaurantAdmin = sequelize.define(
    'RestaurantAdmin',
    {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      }
    },
    {}
  );
  RestaurantAdmin.associate = function(models) {
    RestaurantAdmin.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    });
    RestaurantAdmin.hasOne(models.Restaurant, {
      foreignKey: 'restaurant_admin_id',
      as: 'restaurant'
    });
  };
  return RestaurantAdmin;
};
