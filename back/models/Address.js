const Address = require('../sequelize-models').Address;

let save = function(addressData) {
    return new Promise(function(solve, reject) {
        Address.create({
            user_id: user_id,
            value: value,
            latitude: latitude,
            longitude: longitude
        })
        .then((address) => {
            if(address) {
                solve(true);
            } else {
                solve(false);
            }
        })
        .catch((error) => { 
            reject(error); 
        });
    });
};

module.exports = {
    save: save
}