'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    user_id: DataTypes.INTEGER
  }, {});
  Customer.associate = function(models) {
    Customer.belongsTo(models.User);
    Customer.hasMany(models.Order, {
      foreignKey: 'customer_id',
      as: 'orders'
    });
    Customer.hasOne(models.ShoppingCart, {
      foreignKey: 'customer_id',
      as: 'shoppingCart'
    });
  };
  return Customer;
};