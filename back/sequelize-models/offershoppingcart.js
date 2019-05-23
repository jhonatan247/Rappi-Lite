'use strict';
module.exports = (sequelize, DataTypes) => {
  const OfferShoppingCart = sequelize.define(
    'OfferShoppingCart',
    {
      shopping_cart_id: DataTypes.INTEGER,
      offer_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER
    },
    {}
  );
  OfferShoppingCart.associate = function(models) {
    // associations can be defined here
  };
  return OfferShoppingCart;
};
