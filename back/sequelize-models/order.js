'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    customer_id: DataTypes.INTEGER,
    shopkeeper_id: DataTypes.INTEGER,
    state: DataTypes.ENUM('completed', 'waiting', 'cancelled')
  }, {});
  Order.associate = function(models) {
    Order.belongsTo(models.Customer, {
      foreignKey: 'customer_id',
      as: 'customer'
    });
    Order.belongsTo(models.Shopkeeper, {
      foreignKey: 'shopkeeper_id',
      as: 'shopkeeper'
    });
    Order.belongsToMany(models.Offer, {
      through: models.OfferOrder,
      foreignKey: 'order_id',
      as: 'offers'
    });
  };
  return Order;
};
