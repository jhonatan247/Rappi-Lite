'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {});
  Customer.associate = function(models) {
    Customer.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    });
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