const Address = require('../sequelize-models').Address;

let save = function(addressData) {
    return new Promise(function(solve, reject) {
        Address.create({
            user_id: addressData.user_id,
            restaurant_id: addressData.restaurant_id,
            value: addressData.value,
            position: {
                type: 'Point',
                coordinates: [addressData.longitude, addressData.latitude],
                crs: { type: 'name', properties: { name: 'ESPG:4326' } }
            }
        })
        .then((address) => {
            if(address) solve();
            else reject(Error("can't create address"));
        })
        .catch((error) => reject(error));
    });
};

module.exports = {
    save: save
}