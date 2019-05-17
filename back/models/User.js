const User = require('../sequelize-models').User;
let Address = require('../sequelize-models').Address;
let sequelize = require('../sequelize-models').sequelize;
let Guard = require('./Guard');
let Customer = require('./Customer');
let Shopkeeper = require('./Shopkeeper');
let RestaurantAdmin = require('./RestaurantAdmin');

module.exports.findByEmail = async function(email) {
    return await User.findOne({
        where: { email: email } 
    });
};

let create = function(userData, t) {
    let credentials = Guard.generateCredentials(userData.password);
    return User.create({
        email: userData.email,
        hash: credentials.hash,
        type: userData.type,
        id_number: userData.id_number,
        name: userData.name,
        phone: userData.phone,
        salt: credentials.salt,
        connected: false
    }, {transaction: t});
}

module.exports.register = function(userData) {
    if(userData.type == 'customer') {
        return Customer.create(userData); 
    } else if(userData.type == 'shopkeeper') {
        return Shopkeeper.create(userData);
    } else if(userData.type == 'restaurant_admin') {
        return RestaurantAdmin.create(userData);
    } else {
        return sequelize.transaction(t => create(userData, t));
    }
};

module.exports.create = create;