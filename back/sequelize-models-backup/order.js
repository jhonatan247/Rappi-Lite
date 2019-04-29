'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    user_id: DataTypes.INTEGER
  }, {});
  Order.associate = function(models) {
    Order.belongsTo(models.User);
    Order.belongsToMany(models.Product, {
      through: 'OrderProduct',
      as: 'products',
      foreignKey: 'order_id'
    });
    Order.belongsToMany(models.Restaurant, {
      through: 'OrderRestaurant',
      as: 'restaurants',
      foreignKey: 'order_id'
    });
  };
  return Order;
};
