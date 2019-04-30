'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    restaurant_admin_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    url_img: DataTypes.STRING
  }, {});
  Restaurant.associate = function(models) {
    Restaurant.belongsTo(models.RestaurantAdmin);
    Restaurant.hasMany(models.Offer, {
      foreignKey: 'restaurant_id'
    });
    Restaurant.hasMany(models.DailySchedule, {
      foreignKey: 'restaurant_id'
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
