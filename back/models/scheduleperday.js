'use strict';
module.exports = (sequelize, DataTypes) => {
  const SchedulePerDay = sequelize.define('SchedulePerDay', {
    restaurant_id: DataTypes.INTEGER,
    day: DataTypes.STRING,
    openingHour: DataTypes.TIME,
    closingTime: DataTypes.TIME
  }, {});
  SchedulePerDay.associate = function(models) {
    SchedulePerDay.belongsTo(models.Restaurant);
  };
  return SchedulePerDay;
};
