const Address = require('../sequelize-models').Address;

let save = function(addressData) {
    return new Promise(function(solve, reject) {
        Address.create({
            user_id: addressData.user_id,
            value: addressData.value,
            latitude: addressData.latitude,
            longitude: addressData.longitude
        })
        .then((address) => {
            if(address) {
                solve(true);
            } else {
                solve(false);
            }
        })
        .catch((error) => {
            console.log(error);
            reject(error); 
        });
    });
};

module.exports = {
    save: save
}