'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    customer_id: DataTypes.INTEGER,
    shopkeeper_id: DataTypes.INTEGER,
    state: DataTypes.ENUM('completed', 'waiting', 'cancelled')
  }, {});
  Order.associate = function(models) {
    Order.belongsTo(models.Customer);
    Order.belongsTo(models.Shopkeeper);
    Order.belongsToMany(Offer, {through: 'OfferOrder'});
  };
  return Order;
};
