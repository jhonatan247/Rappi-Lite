'use strict';
module.exports = (sequelize, DataTypes) => {
  const ShoppingCart = sequelize.define('ShoppingCart', {
    customer_id: DataTypes.INTEGER
  }, {});
  ShoppingCart.associate = function(models) {
    ShoppingCart.belongsTo(models.Customer);
    ShoppingCart.belongsToMany(Offer, {through: 'OfferShoppingCart'});
  };
  return ShoppingCart;
};
