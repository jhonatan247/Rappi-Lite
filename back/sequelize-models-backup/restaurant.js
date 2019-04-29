'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    name: DataTypes.STRING,
    url_img: DataTypes.STRING
  }, {});
  Restaurant.associate = function(models) {
    Restaurant.hasOne(models.Address, {
      foreignKey: 'restaurant_id',
      onDelete: 'cascade'
    });
    Restaurant.hasMany(models.Offer, {
      foreignKey: 'restaurant_id'
    });
    Restaurant.hasMany(models.SchedulePerDay, {
      foreignKey: 'restaurant_id'
    });
    Restaurant.belongsToMany(models.Order, {
      through: 'OrderRestaurant',
      as: 'orders',
      foreignKey: 'restaurant_id'
    });
  };
  return Restaurant;
};
