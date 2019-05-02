'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    user_id: DataTypes.INTEGER,
    value: DataTypes.STRING,
    latitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE
  }, {});
  Address.associate = function(models) {
    Address.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    });
  };
  return Address;
};
