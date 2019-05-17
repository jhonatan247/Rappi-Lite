const Sequelize = require('sequelize');

('use strict');
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    customer_id: DataTypes.INTEGER,
    value: DataTypes.STRING,
    position: Sequelize.GEOMETRY('POINT', 4326)
  }, {});
  Address.associate = function(models) {
    Address.belongsTo(models.Customer, {
      foreignKey: 'customer_id'
    });
    Address.hasOne(models.Restaurant, {
      foreignKey: 'address_id'
    });
    Address.hasOne(models.Customer, {
      foreignKey: 'actual_address_id',
    });
  };
  return Address;
};
