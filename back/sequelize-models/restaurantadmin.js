'use strict';
module.exports = (sequelize, DataTypes) => {
  const RestaurantAdmin = sequelize.define('RestaurantAdmin', {
    user_id: DataTypes.INTEGER,
    restaurant_id: DataTypes.INTEGER
  }, {});
  RestaurantAdmin.associate = function(models) {
    // associations can be defined here
  };
  return RestaurantAdmin;
};