let sequelize = require('../sequelize-models').sequelize;
const OfferShoppingCart = require('../sequelize-models').OfferShoppingCart;
const ShoppingCartsRepository = require('./ShoppingCartsRepository');
let OffersRepository = require('./OffersRepository');

module.exports.addOffer = function(customer_id, offer_id, quantity, shoppingCart, offer) {
    if(shoppingCart.dataValues.offers) {
        if (offer.dataValues.restaurant.id == shoppingCart.dataValues.restaurant) {
            return sequelize.transaction(t => 
                OfferShoppingCart.create({shopping_cart_id: customer_id, offer_id: offer_id, quantity:quantity}, {transaction: t}).then(() =>
                    shoppingCart.update({restaurant: offer.dataValues.restaurant.id, total: offer.dataValues.price + shoppingCart.dataValues.total}, {transaction: t})
                )
            );
        }
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

module.exports.deleteOffer = async function(custoimer_id, offer_id) {

}

module.exports.checkout = async function(customer_id) {
    console.log(JSON.stringify(ShoppingCartsRepository.getById(customer_id).dataValues));
    /*OrdersRepository.addOrders(offers, customer_id, shoppingCart.restaurant, shoppingCart.total);*/
}