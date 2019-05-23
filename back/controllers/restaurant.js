let Restaurant = require('../models').Restaurant;

module.exports.listOfNearby = (req, res) => {
  let customer_id = req.decoded.id;
  Restaurant.listOfNearby(customer_id)
    .then(restaurantList =>
      res.json({
        success: true,
        message: 'list succesful obtained',
        list: restaurantList
      })
    )
    .catch(error => res.status(500).json({ message: error.message }));
};

module.exports.productsList = (req, res) => {
  let restaurant_id = req.query.restaurant_id;
  Restaurant.productsList(restaurant_id)
    .then(products =>
      res.json({
        success: true,
        message: 'list succesful obtained',
        list: products
      })
    )
    .catch(error => res.status(500).json({ message: error.message }));
};
