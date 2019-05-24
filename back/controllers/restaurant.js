let Restaurant = require('../models').Restaurant;
let RestaurantsRepository = require('../models').RestaurantsRepository;

module.exports.listOfNearby = (req, res) => {
  let customer_id = req.decoded.id;
  RestaurantsRepository.listOfNearby(customer_id)
    .then(restaurantsList =>
      res.json({
        success: true,
        message: 'list succesful obtained',
        list: restaurantsList
      })
    )
    .catch(error => res.status(500).json({message: error.message}));
}

module.exports.productsList = (req, res) => {
  let restaurant_id = req.body.restaurant_id;
  Restaurant.productsList(restaurant_id)
    .then(restaurants => res.status(200).send(restaurants))
    .catch(error => res.status(500).json({message: error.message}));
}


module.exports.isOpen = (req, res) => {
  Restaurant.isOpen(req.query.restaurant_id)
  .then(val => res.status(200).send({isOpen: val}))
  .catch(error => res.status(500).json({message: error.message}));
}