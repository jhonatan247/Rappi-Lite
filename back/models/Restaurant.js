let Restaurant = require('../sequelize-models').Restaurant;
let ShoppingCart = require('../sequelize-models').ShoppingCart;
let Address = require('../sequelize-models').Address;
/*
let functionName = function(params) {
    return new Promise(function(solve, reject) {

    });
};
*/

let listOfNearby = function(latitude, longitude) {
  return new Promise(function(solve, reject) {
    if (latitude && longitude) {
      Restaurant.findAll({
        where: Sequelize.where(
          Sequelize.fn(
            'ST_DWithin',
            Sequelize.col('position'),
            Sequelize.fn(
              'ST_SetSRID',
              Sequelize.fn('ST_MakePoint', longitude, latitude),
              4326
            ),
            0.032
          ),
          true
        )
        //order: Sequelize.literal('distance ASC')
      })
        .then(restaurants => solve(restaurants))
        .catch(error => reject(error));
    } else {
      reject(Error('There is not a position'));
    }
  });
};

let productsList = restaurant_id => {
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
};

module.exports = {
  listOfNearby: listOfNearby,
  productsList: productsList
};
