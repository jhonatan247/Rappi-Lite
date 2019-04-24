'use strict';
module.exports = (sequelize, DataTypes) => {
  const ShoppingCar = sequelize.define('ShoppingCar', {
    user_id: DataTypes.INTEGER,
    total: DataTypes.INTEGER
  }, {});
  ShoppingCar.associate = function(models) {
    ShoppingCar.belongsTo(models.User);
    ShoppingCar.hasMany(models.Product, {
      foreignKey: 'shoppingCar_id',
      as: 'products',
    });
  };
  return ShoppingCar;
};
