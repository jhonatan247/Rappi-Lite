'use strict';
module.exports = (sequelize, DataTypes) => {
  const Offer = sequelize.define('Offer', {
    product_id: DataTypes.INTEGER,
    restaurant_id: DataTypes.INTEGER
  }, {});
  Offer.associate = function(models) {
    // associations can be defined here
  };
  return Offer;
};