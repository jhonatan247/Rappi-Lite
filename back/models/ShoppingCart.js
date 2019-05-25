let sequelize = require('../sequelize-models').sequelize;
const OfferShoppingCart = require('../sequelize-models').OfferShoppingCart;
const ShoppingCartsRepository = require('./ShoppingCartsRepository');
let OffersRepository = require('./OffersRepository');
let OrdersRepository = require('./OrdersRepository');

module.exports.addOffer = function(customer_id, offer_id, quantity, shoppingCart, offer) {
    if(shoppingCart.dataValues.offers, offer.dataValues.restaurant.id == shoppingCart.dataValues.restaurant) {
        return sequelize.transaction(t => 
            OfferShoppingCart.create({shopping_cart_id: customer_id, offer_id: offer_id, quantity:quantity}, {transaction: t}).then(() =>
                shoppingCart.update({restaurant: offer.dataValues.restaurant.id, total: offer.dataValues.price + shoppingCart.dataValues.total}, {transaction: t})
            )
        );
    }
    return sequelize.transaction(t => 
        OfferShoppingCart.create({shopping_cart_id: customer_id, offer_id: offer_id, quantity:quantity}, {transaction: t}).then(() =>
            shoppingCart.update({restaurant: offer.dataValues.restaurant.id, total: offer.dataValues.price}, {transaction: t})
        )
    );
}

module.exports.getOfferAndShoppingCart = async function(customer_id, offer_id) {
    let result = {};
    result.shoppingCart = await ShoppingCartsRepository.getById(customer_id);
    result.offer = await OffersRepository.getById(offer_id);
    return result;
}

module.exports.getOffers = async function(customer_id) {
    return (await ShoppingCartsRepository.getById(customer_id)).dataValues.offers;
}

module.exports.deleteOffer = async function(customer_id, offer_id, t) {
    return OfferShoppingCart.destroy({where: {customer_id: customer_id, offer_id: offer_id}, transaction: t}).then(() =>
        {

        }
    );
}

module.exports.checkout = async function(customer_id) {
    let shoppingCart = await ShoppingCartsRepository.getById(customer_id);
    let transaction = await sequelize.transaction();
    try {
        await OrdersRepository.addOrders(shoppingCart.offers, customer_id, shoppingCart.restaurant, shoppingCart.total, transaction);
        await OfferShoppingCart.destroy({where: {shopping_cart_id: customer_id}, transaction: transaction});
        await shoppingCart.update({restaurant: null, total: 0}, {transaction: transaction});
        await transaction.commit();
    } catch (error) {
        if (error) await transaction.rollback();
        throw Error(error);
    }
}