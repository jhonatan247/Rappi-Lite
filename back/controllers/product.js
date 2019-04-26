let Product = require('../models').Product;

let list = (req, res, next) => {
  return Product
    .findAll(
      {
        attributes: ['id', 'restaurant_id', 'name', 'description', 'url_img'],
        where: {
          restaurant_id: 3
        }
      })
    .then((restaurants) => res.status(200).send(restaurants))
    .catch((error) => {
      res.status(400).send(error);
    });
}

module.exports = {
  list: list
};
