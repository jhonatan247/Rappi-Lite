'use strict';
module.exports = (sequelize, DataTypes) => {
  const SchedulePerDay = sequelize.define('DailySchedule', {
    restaurant_id: DataTypes.INTEGER,
    day: DataTypes.ENUM('sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'),
    openingHour: DataTypes.TIME,
    closingTime: DataTypes.TIME
  }, {});
  /*
  SchedulePerDay.associate = function(models) {
    SchedulePerDay.belongsTo(models.Restaurant);
  };
  */
  return SchedulePerDay;
};
