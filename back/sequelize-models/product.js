'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    url_img: DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    Product.hasMany(models.Offer, {
      foreignKey: 'product_id'
    });
  };
  return Product;
};
