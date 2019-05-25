const Order = require('../sequelize-models').Order;
const OrderDetail = require('../sequelize-models').OrderDetail;
let sequelize = require('../sequelize-models').sequelize;

module.exports.addOrders = function(offers, customer_id, restaurant_id, total) {
    return sequelize.transaction(t => {
        return Order.create({
                customer_id: customer_id,
                state: 'waiting',
                restaurant_id: restaurant_id,
                total: total
        }, { transaction: t })
        .then((order) => {
            var promises = [];
            var promise;
            offers.forEach((offer) => {
                promise = OrderDetail.create({
                    offer_id: offer.id,
                    cost: offer.price,
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