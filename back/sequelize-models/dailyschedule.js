'use strict';
module.exports = (sequelize, DataTypes) => {
  const DailySchedule = sequelize.define('DailySchedule', {
    restaurant_id: DataTypes.INTEGER,
    day: DataTypes.ENUM('sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'),
    openingHour: DataTypes.TIME,
    closingTime: DataTypes.TIME
  }, {});
  DailySchedule.associate = function(models) {
    DailySchedule.belongsTo(models.Restaurant);
  };
  return DailySchedule;
};
