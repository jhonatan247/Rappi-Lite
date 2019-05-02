'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    restaurant_admin_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    url_img: DataTypes.STRING
  }, {});
  Restaurant.associate = function(models) {
    Restaurant.belongsTo(models.RestaurantAdmin, {
      foreignKey: 'restaurant_admin_id',
      as: 'admin'
    });
    Restaurant.hasMany(models.Offer, {
      foreignKey: 'restaurant_id',
      as: 'offers'
    });
    Restaurant.hasMany(models.DailySchedule, {
      foreignKey: 'restaurant_id',
      as: 'schedules'
    });
    /*
    Restaurant.belongsToMany(models.Order, {
      through: 'OrderRestaurant',
      as: 'orders',
      foreignKey: 'restaurant_id'
    });
    */
  };
  return Restaurant;
};
