const Order = require('../sequelize-models').Order;
const OrderDetail = require('../sequelize-models').OrderDetail;
let ShopkeepersRepository = require('./ShopkeepersRepository');
let sequelize = require('../sequelize-models').sequelize;

module.exports.addOrders = function(offers, customer_id, restaurant_id, total, t) {
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
                quantity: offer.OfferShoppingCart.quantity, 
                order_id: order.id
            },
            { transaction: t });
            promises.push(promise);
        });
        
        return Promise.all(promises);
    });
}

module.exports.getOrders = async function(shopkeeper_id) {
    let shopkeeperLocation = (await ShopkeepersRepository.getById(shopkeeper_id)).dataValues.location.coordinates;
    return await Order.findAll({
        include: [
            {
                model: sequelize.models.Restaurant,
                as: 'restaurant'
            }
        ],
        where: {
            state: "waiting"
        },
        order: [
            [
              Sequelize.fn(
                'ST_Distance',
                Sequelize.col('restaurant.position'),
                Sequelize.fn('ST_SetSRID', Sequelize.fn('ST_MakePoint', shopkeeperLocation[0], shopkeeperLocation[1]), 4326)
              ), 
              'ASC'
            ]
          ]
    });
}