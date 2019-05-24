const Order = require('../sequelize-models').Order;
const OfferOrder = require('../sequelize-models').OfferOrder;
let sequelize = require('../sequelize-models').sequelize;

module.exports.addOrders = function(offers, customer_id) {
    return sequelize.transaction(t => {
        return Order.create({
                customer_id: customer_id,
                state: 'creating',
        }, { transaction: t })
        .then((order) => {
            var promises = [];
            var promise;
            offers.forEach((offer) => {
                promise = OfferOrder.create({
                    offer_id: offer.id, 
                    quantity: offer.quantity, 
                    order_id: order.id
                },
                { transaction: t });
                promises.push(promise);
            });
            
            return Promise.all(promises);
        });
    });
}

module.exports.getOrders = async function(shopkeeper_id) {
}