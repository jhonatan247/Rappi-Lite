let Restaurant = require('../sequelize-models').Restaurant;
let Address = require('../sequelize-models').Address;
let DailySchedule = require('../sequelize-models').DailySchedule;
let Offer = require('../sequelize-models').Offer;
let sequelize = require('../sequelize-models').sequelize;
let Sequelize = require('sequelize').Sequelize;

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
            product.dataValues.restaurant_id = offer.dataValues.restaurant_id;
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
  /*
  DailySchedule.findAndCountAll({
    where: {
      [Sequelize.Op.and]: [
        Sequelize.where(
          Sequelize.cast(Sequelize.col('day'), 'TEXT'),
          Sequelize.fn('TRIM', Sequelize.fn('TO_CHAR', Sequelize.literal('CURRENT_DATE'), 'day'))
        ),
        Sequelize.where(
          Sequelize.col('opening_hour'),
          '>=',
          Sequelize.fn('DATE_TRUNC', 'minute', Sequelize.literal('LOCALTIME'))          
        ),
        Sequelize.where(
          Sequelize.col('closing_time'),
          '<=',
          Sequelize.fn('DATE_TRUNC', 'minute', Sequelize.literal('LOCALTIME'))
        ),
        {
          restaurant_id: restaurant_id
        }
      ]
    }
  });
  */
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
