let Restaurant = require('../sequelize-models').Restaurant;
let Customer = require('./Customer');
let Sequelize = require('sequelize').Sequelize;

module.exports.listOfNearby = async function(customer_id) {
    const address = await Customer.actualAddress(customer_id);
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