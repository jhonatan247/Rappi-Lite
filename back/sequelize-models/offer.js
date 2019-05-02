'use strict';
module.exports = (sequelize, DataTypes) => {
  const Offer = sequelize.define('Offer', {
    product_id: DataTypes.INTEGER,
    restaurant_id: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    availability: DataTypes.BOOLEAN
  }, {});
  Offer.associate = function(models) {
    Offer.belongsTo(models.Restaurant, {
      foreignKey: 'restaurant_id',
      as: 'restaurant'
    });
    Offer.belongsTo(models.Product, {
      foreignKey: 'product_id',
      as: 'product'
    });
    Offer.belongsToMany(models.Order, {
      through: models.OfferOrder,
      foreignKey: 'offer_id',
      as: 'orders'
    });
    Offer.belongsToMany(models.ShoppingCart, {
      through: models.OfferShoppingCart,
      foreignKey: 'offer_id',
      as: 'shoppingCarts'
    });
  };
  return Offer;
};