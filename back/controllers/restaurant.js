let Restaurant = require('../models').Restaurant;

let listOfNearby = (req, res) => {
  let address = req.body;
  Restaurant.listOfNearby(address)
  .then((restaurantsList) =>
    res.json({
      success: true,
      message: 'list succesful obtained',
      list: restaurantsList
    })
  )
  .catch((error) => res.status(400).send(error));
}

let productsList = (req, res) => {
  let restaurant_id = req.body.restaurant_id;
  Restaurant.productsList(restaurant_id)
  .then((restaurants) => res.status(200).send(restaurants))
  .catch((error) => res.status(400).send(error));
};

module.exports = {
  listOfNearby: listOfNearby,
  productsList: productsList
};
