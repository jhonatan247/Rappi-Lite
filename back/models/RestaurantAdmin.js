const RestaurantAdmin = require('../sequelize-models').RestaurantAdmin;
let sequelize = require('../sequelize-models').sequelize;
let User = require('./User');

module.exports.create = function(userData) {
    return sequelize.transaction(t => User.create(userData, t)
    .then((user) => Customer.create({user_id: user.dataValues.id}, {transaction: t})
    .then((customer) => user.setCustomer(customer, {transaction: t}))
    ));
}
