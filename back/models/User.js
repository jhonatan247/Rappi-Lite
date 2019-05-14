const User = require('../sequelize-models').User;
let sequelize = require('../sequelize-models').sequelize;
let Guard = require('./Guard');
let Customer = require('./Customer');
let Shopkeeper = require('./Shopkeeper');
let RestaurantAdmin = require('./RestaurantAdmin');

module.exports.findByEmail = function(email) {
    return new Promise(function(solve, reject) {
        User.findOne({ where: { email: email } })
        .then((user) => {
            console.log(user.dataValues + '\ntrying to login into the app');
            if(user) solve(user.dataValues);
            else reject(Error("there is no user with email: " + email));
        })
        .catch((error) => reject(error));
    });
};

let create = async function(userData, t) {
    let credentials = Guard.generateCredentials(userData.password);
    return User.create({
        email: userData.email,
        hash: credentials.hash,
        type: userData.type,
        id_number: userData.id_number,
        name: userData.name,
        phone: userData.phone,
        salt: credentials.salt
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