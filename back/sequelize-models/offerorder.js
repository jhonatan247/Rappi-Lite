'use strict';
module.exports = (sequelize, DataTypes) => {
  const OfferOrder = sequelize.define('OfferOrder', {
    offer_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  OfferOrder.associate = function(models) {
    // associations can be defined here
  };
  return OfferOrder;
};