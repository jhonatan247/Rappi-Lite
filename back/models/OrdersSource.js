const Order = require('../sequelize-models').Order;
const OfferOrder = require('../sequelize-models').OfferOrder;
let sequelize = require('../sequelize-models').sequelize;

module.exports.addOrders = function(offers, customer_id) {
    return sequelize.transaction(t => {
        console.log("enter transaction");
        return Order.create({
                customer_id: customer_id,
                state: 'waiting'
        }, { transaction: t })
        .then((order) => {
            console.log("then transaction");
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
};