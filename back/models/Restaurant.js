let Restaurant = require('../sequelize-models').Restaurant;
let Address = require('../sequelize-models').Address;
let DailySchedule = require('../sequelize-models').DailySchedule;
let Product = require('../sequelize-models').Product;
let Offer = require('../sequelize-models').Offer;
let Customer = require('./Customer');
let sequelize = require('../sequelize-models').sequelize;
let Sequelize = require('sequelize').Sequelize;

module.exports.listOfNearby = async function(customer_id) {
  const address = await Customer.getActualAddress(customer_id);
  if (address) {
    const coordinates = address.dataValues.position.coordinates;
    return new Promise(function(solve, reject) {
      Restaurant.findAll({
        attributes: {
          include: [
            [
              Sequelize.fn(
                'ST_Distance',
                Sequelize.col('position'),
                Sequelize.fn(
                  'ST_SetSRID',
                  Sequelize.fn('ST_MakePoint', coordinates[0], coordinates[1]),
                  4326
                )
              ),
              'distance'
            ]
          ]
        },
        where: Sequelize.where(
          Sequelize.fn(
            'ST_DWithin',
            Sequelize.col('position'),
            Sequelize.fn(
              'ST_SetSRID',
              Sequelize.fn('ST_MakePoint', coordinates[0], coordinates[1]),
              4326
            ),
            10000
          ),
          true
        ),
        order: Sequelize.literal('distance ASC')
      })
        .then(restaurants => solve(restaurants))
        .catch(error => {
          reject(error);
        });
    });
  } else {
    reject(Error('Error in parametters'));
  }
};

module.exports.productsList = function(restaurant_id) {
  return new Promise(function(solve, reject) {
    if (restaurant_id) {
      Offer.findAll({
        include: [
          {
            model: sequelize.models.Product,
            as: 'product'
          }
        ],
        where: {
          restaurant_id: restaurant_id,
          availability: true
        }
      })
        .then(offers => {
          products = [];
          offers.forEach(offer => {
            console.log(offer);
            const product = offer.product;
            product.dataValues.price = offer.dataValues.price;
            products.push(product);
          });
          solve(products);
        })
        .catch(error => reject(error));
    } else {
      reject(Error('There is no restaurant_id'));
    }
  });
};

module.exports.saveAddress = function(addressData, restaurant_id) {
  return sequelize.transaction(t =>
    Address.save(addressData, t).then(address =>
      Restaurant.update(
        { address_id: address.id },
        { where: { id: restaurant_id } }
      )
    )
  );
};

module.exports.isOpen = async function(restaurant_id) {
  let restaurant = await Restaurant.findOne({
    include: [
      {
        model: DailySchedule,
        as: 'schedules',
        where: Sequelize.where(
          Sequelize.cast(Sequelize.col('day'), 'TEXT'),
          Sequelize.fn(
            'TRIM',
            Sequelize.fn('TO_CHAR', Sequelize.fn('CURRENT_DATE'), 'day')
          )
        )
      }
    ],
    where: {
      [Sequelize.Op.and]: [
        Sequelize.where(
          Sequelize.fn('DATE_TRUNC', 'minute', Sequelize.fn('LOCALTIME')),
          Sequelize.col('schedules.opening_hour'),
          Sequelize.col('schedules.closing_time'),
          Sequelize.Op.between
        ),
        {
          id: restaurant_id
        }
      ]
    }
  });
  return restaurant ? true : false;
};
