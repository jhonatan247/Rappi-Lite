const Sequelize = require('sequelize');

('use strict');
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define(
    'Restaurant',
    {
      restaurant_admin_id: DataTypes.INTEGER,
      address: DataTypes.STRING,
      position: Sequelize.GEOMETRY('POINT', 4326),
      name: DataTypes.STRING,
      url_img: DataTypes.STRING
    },
    {}
  );
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
  };
  return Restaurant;
};
