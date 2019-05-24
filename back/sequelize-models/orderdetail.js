'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderDetail = sequelize.define(
    'OrderDetail',
    {
      offer_id: DataTypes.INTEGER,
      order_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      cost: DataTypes.DOUBLE,
    },
    {}
  );
  OrderDetail.associate = function(models) {
    // associations can be defined here
  };
  return OrderDetail;
};
