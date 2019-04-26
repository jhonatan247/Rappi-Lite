'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    shoppingCar_id: DataTypes.INTEGER,
    restaurant_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    url_img: DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    Product.belongsTo(models.ShoppingCar);
    Product.belongsTo(models.Restaurant);
    Product.belongsToMany(models.Order, {
      through: 'OrderProduct',
      as: 'orders',
      foreignKey: 'product_id'
    });
  };
  return Product;
};
