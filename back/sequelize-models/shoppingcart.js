'use strict';
module.exports = (sequelize, DataTypes) => {
  const ShoppingCart = sequelize.define(
    'ShoppingCart',
    {
      customer_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      }
    },
    {}
  );
  ShoppingCart.associate = function(models) {
    ShoppingCart.belongsTo(models.Customer, {
      foreignKey: 'customer_id',
      as: 'customer'
    });
    ShoppingCart.belongsToMany(models.Offer, {
      through: models.OfferShoppingCart,
      foreignKey: 'shopping_cart_id',
      as: 'offers'
    });
  };
  return ShoppingCart;
};
