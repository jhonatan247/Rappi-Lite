'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shopkeeper = sequelize.define('Shopkeeper', {
    user_id: DataTypes.INTEGER,
    active_order_id: DataTypes.INTEGER
  }, {});
  Shopkeeper.associate = function(models) {
    // associations can be defined here
  };
  return Shopkeeper;
};