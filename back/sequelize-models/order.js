'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    'Order',
    {
      customer_id: DataTypes.INTEGER,
      shopkeeper_id: DataTypes.INTEGER,
      restaurant_id: DataTypes.INTEGER,
      total: DataTypes.DOUBLE,
      state: DataTypes.ENUM('waiting', 'assigned', 'completed','cancelled')
    },
    {}
  );
  Order.associate = function(models) {
    Order.belongsTo(models.Customer, {
      foreignKey: 'customer_id',
      as: 'customer'
    });
    Order.belongsTo(models.Shopkeeper, {
      foreignKey: 'shopkeeper_id',
      as: 'shopkeeper'
    });
    Order.belongsTo(models.Restaurant, {
      foreignKey: 'restaurant_id',
      as: 'restaurant'
    });
    Order.belongsToMany(models.Offer, {
      through: models.OrderDetail,
      foreignKey: 'order_id',
      as: 'offers'
    });
  };
  return Order;
};
