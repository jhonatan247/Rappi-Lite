'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shopkeeper = sequelize.define('Shopkeeper', {
    user_id: DataTypes.INTEGER
  }, {});
  Shopkeeper.associate = function(models) {
    Shopkeeper.belongsTo(models.User);
    Shopkeeper.hasMany(models.Order, {
      foreignKey: 'shopkeeper_id',
      as: 'orders'
    });
  };
  return Shopkeeper;
};