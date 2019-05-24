const ShoppingCart = require('../sequelize-models').ShoppingCart;

module.exports.create = function(customer_id, t) {
    return ShoppingCart.create({customer_id: customer_id}, {transaction: t});
}