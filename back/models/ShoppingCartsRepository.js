const ShoppingCart = require('../sequelize-models').ShoppingCart;
let sequelize = require('../sequelize-models').sequelize;

module.exports.create = function(customer_id, t) {
    return ShoppingCart.create({customer_id: customer_id, total: 0}, {transaction: t});
}

module.exports.getById = async function(customer_id) {
    return await ShoppingCart.findOne({
        include: [
            {
                model: sequelize.models.Offer,
                as: 'offers'
            }
        ],
        where: {
            customer_id: customer_id
        }
    });
}