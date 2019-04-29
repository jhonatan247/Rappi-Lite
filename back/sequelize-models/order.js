'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    customer_id: DataTypes.INTEGER,
    shopkeeper_id: DataTypes.INTEGER,
    state: DataTypes.ENUM('completed', 'waiting', 'cancelled')
  }, {});
  /*
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
  */
  return Order;
};
