'use strict';
module.exports = (sequelize, DataTypes) => {
  const RestaurantAdmin = sequelize.define('RestaurantAdmin', {
    user_id: DataTypes.INTEGER
  }, {});
  RestaurantAdmin.associate = function(models) {
    RestaurantAdmin.belongsTo(models.User);
    RestaurantAdmin.hasOne(models.Restaurant, {
      foreignKey: 'restaurant_admin_id',
      as: 'restaurant'
    });
  };
  return RestaurantAdmin;
};