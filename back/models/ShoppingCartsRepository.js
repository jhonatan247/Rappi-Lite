const ShoppingCart = require('../sequelize-models').ShoppingCart;
let sequelize = require('../sequelize-models').sequelize;

module.exports.create = function(customer_id, t) {
    return ShoppingCart.create({customer_id: customer_id}, {transaction: t});
}

module.exports.getById = function(customer_id) {
    return Offer.findOne({
        include: [
            {
                model: sequelize.models.Offer,
                as: 'offers'
            }
        ],
        where: {
            customer_id = customer_id
        }
    });
}