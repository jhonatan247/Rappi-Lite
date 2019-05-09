'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define(
    'Address',
    {
      customer_id: DataTypes.INTEGER,
      value: DataTypes.STRING,
      latitude: DataTypes.DOUBLE,
      longitude: DataTypes.DOUBLE
    },
    {}
  );
  Address.associate = function(models) {
    Address.belongsTo(models.Customer, {
      foreignKey: 'customer_id'
    });
    Address.hasOne(models.Restaurant, {
      foreignKey: 'address_id'
    });
  };
  return Address;
};
