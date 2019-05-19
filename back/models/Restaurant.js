let Restaurant = require('../sequelize-models').Restaurant;
let Address = require('../sequelize-models').Address;
let DailySchedule = require('../sequelize-models').DailySchedule;
let Customer = require('./Customer');
let Sequelize = require('sequelize');

module.exports.listOfNearby = async function(user_id) {
  let address = await Customer.getActualAddress(user_id);
  if (address) {    
    return await Restaurant.findAll({
      /* Limit the range of valid addresses
      where: Sequelize.where(
        Sequelize.fn(
          'ST_DWithin',
          Sequelize.col('position'),
          Sequelize.fn('ST_SetSRID', Sequelize.fn('ST_MakePoint', longitude, latitude), 4326),
          60
        ),
        true
      ),*/
      order: [
        [
          Sequelize.fn(
            'ST_Distance',
            Sequelize.fn('ST_SetSRID', Sequelize.fn('ST_MakePoint', Sequelize.col('position').coordinates[0], Sequelize.col('position').coordinates[1]), 4326),
            Sequelize.fn('ST_SetSRID', Sequelize.fn('ST_MakePoint', address.position.coordinates[0], address.position.coordinates[1]), 4326)
          ), 
          'ASC'
        ]
      ]
    });
  } else {
    throw Error('There is no address or user');
  }
}

module.exports.productsList = /*async*/function(restaurant_id) {
  return new Promise(function(solve, reject) {
    if (restaurant_id) {
      Product.findAll({
        attributes: ['id', 'restaurant_id', 'name', 'description', 'url_img'],
        where: {
          restaurant_id: restaurant_id
        }
      })
        .then(restaurants => solve(restaurants))
        .catch(error => reject(error));
    } else {
      reject(Error('There is no restaurant_id'));
    }
  });
}

module.exports.saveAddress = function(addressData, restaurant_id) {
  return sequelize.transaction(t => Address.save(addressData, t)
  .then((address) => Restaurant.update({address_id: address.id}, {where: {id: restaurant_id}}))
  );
}

module.exports.isOpen = async function(restaurant_id) {
  let restaurant = await Restaurant.findOne({
    include: [
      {
        model: DailySchedule,
        as: 'schedules',
        where: Sequelize.where(
          Sequelize.cast(Sequelize.col('day'), 'TEXT'),
          Sequelize.fn('TRIM', Sequelize.fn('TO_CHAR', Sequelize.fn('CURRENT_DATE'), 'day'))
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
}
