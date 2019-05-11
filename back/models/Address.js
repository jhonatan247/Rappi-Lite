const Address = require('../sequelize-models').Address;

let save = function(addressData) {
  return new Promise(function(solve, reject) {
    Address.create({
      customer_id: addressData.user_id,
      value: addressData.value,
      position: {
        type: 'Point',
        coordinates: [addressData.longitude, addressData.latitude],
        crs: { type: 'name', properties: { name: 'EPSG:4326' } }
      }
    })
    .then(address => {
      if (address) solve();
      else reject(Error("can't create address"));
    })
    .catch(error => reject(error));
  });
};

module.exports = {
  save: save
};
