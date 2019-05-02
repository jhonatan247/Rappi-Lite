let Restaurant = require('../models').Restaurant;

let listOfNearby = (req, res) => {
  let address = /*req.decoded*/'the address';
  Restaurant.listOfNearby(address)
  .then((restaurantsList) => {
    let success = restaurantsList ? true : false;
    let message = restaurantsList ? 'list succesful obtained' : 'cannot get list of restaurants';
    res.json({
      success: success,
      message: message,
      list: restaurantsList 
    });
  })
  .catch((error) => res.status(400).send(error));
}

module.exports = {
  listOfNearby: listOfNearby
};
