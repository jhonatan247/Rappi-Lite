'use strict';
module.exports = (sequelize, DataTypes) => {
  const DailySchedule = sequelize.define(
    'DailySchedule',
    {
      restaurant_id: DataTypes.INTEGER,
      day: DataTypes.ENUM(
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday'
      ),
      opening_hour: DataTypes.TIME,
      closing_time: DataTypes.TIME
    },
    {}
  );
  DailySchedule.associate = function(models) {
    DailySchedule.belongsTo(models.Restaurant, {
      foreignKey: 'restaurant_id',
      as: 'restaurant'
    });
  };
  return DailySchedule;
};
