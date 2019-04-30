'use strict';
module.exports = (sequelize, DataTypes) => {
  const Offer = sequelize.define('Offer', {
    product_id: DataTypes.INTEGER,
    restaurant_id: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    availability: DataTypes.BOOLEAN
  }, {});
  Offer.associate = function(models) {
    Offer.belongsTo(models.Restaurant);
    Offer.belongsTo(models.Product);
    Offer.belongsToMany(Order, {through: 'OfferOrder'});
    Offer.belongsToMany(ShoppingCart, {through: 'OfferShoppingCart'});
  };
  return Offer;
};