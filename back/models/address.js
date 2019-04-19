'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    user_id: DataTypes.INTEGER,
    value: DataTypes.STRING
  }, {});
  Address.associate = function(models) {
    Address.belongsTo(models.User);
  };
  return Address;
};
