'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    'Customer',
    {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      actual_address_id: {
        type: DataTypes.INTEGER
      }
    },
    {}
  );
  Customer.associate = function(models) {
    Customer.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'personalInfo'
    });
    Customer.hasMany(models.Order, {
      foreignKey: 'customer_id',
      as: 'orders'
    });
    Customer.hasOne(models.ShoppingCart, {
      foreignKey: 'customer_id',
      as: 'shoppingCart'
    });
    Customer.hasMany(models.Address, {
      foreignKey: 'customer_id',
      as: 'addresses'
    });
    Customer.belongsTo(models.Address, {
      foreignKey: 'actual_address_id',
      as: 'actualAddress'
    });
  };
  return Customer;
};
