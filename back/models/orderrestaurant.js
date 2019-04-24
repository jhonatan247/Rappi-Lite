'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderRestaurant = sequelize.define('OrderRestaurant', {
    order_id: DataTypes.INTEGER,
    restaurant_id: DataTypes.INTEGER
  }, {});
  OrderRestaurant.associate = function(models) {
    // associations can be defined here
  };
  return OrderRestaurant;
};