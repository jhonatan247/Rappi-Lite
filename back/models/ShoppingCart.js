let sequelize = require('../sequelize-models').sequelize;
const OfferShoppingCart = require('../sequelize-models').OfferShoppingCart;
const OffersRepository = require('../OffersRepository');
const ShoppingCartsRepository = require('../ShoppingCartsRepository');

module.exports.addOffer = function(customer_id, offer_id, quantity) {
    ShoppingCartsRepository.getById(customer_id).then(shoppingCart => 
        OffersRepository.getById(offer_id).then(offer => {
            if(shoppingCart.dataValues.offers) {
                if (offer.dataValues.restaurant.id == shoppingCart.dataValues.restaurant) {
                    return sequelize.transaction(t => {
                        OfferShoppingCart.create({shopping_cart_id: customer_id, offer_id: offer_id, quantity:quantity}, {transaction: t}).then(() =>
                            shoppingCart.update({restaurant: offer.dataValues.restaurant.id, total: offer.dataValues.price + shoppingCart.dataValues.total}, {transaction: t})
                        );
                    });
                }
            } else {
                return sequelize.transaction(t => {
                    OfferShoppingCart.create({shopping_cart_id: customer_id, offer_id: offer_id, quantity:quantity}, {transaction: t}).then(() =>
                        shoppingCart.update({restaurant: offer.dataValues.restaurant.id, total: offer.dataValues.price}, {transaction: t})
                    );
                });
            }
        })
    );
};

module.exports.getOffers = async function(customer_id) {
    return (await ShoppingCartsRepository.getById(customer_id)).dataValues.offers;
}

module.exports.checkout = async function(custoimer_id) {

}