const Address = require('../sequelize-models').Address;

module.exports.save = function(addressData, t) {
  return Address.create(
    {
      customer_id: addressData.user_id,
      value: addressData.value,
      position: {
        type: 'Point',
        coordinates: [addressData.longitude, addressData.latitude],
        crs: { type: 'name', properties: { name: 'EPSG:4326' } }
      }
    },
    { transaction: t }
  );
};
