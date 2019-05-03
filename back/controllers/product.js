let Product = require('../sequelize-models').Product;

let list = (req, res, next) => {
  return Product.findAll({
    attributes: ['id', 'restaurant_id', 'name', 'description', 'url_img'],
    where: {
      restaurant_id: req.body.restaurant_id
    }
  })
    .then(restaurants => res.status(200).send(restaurants))
    .catch(error => {
      res.status(400).send(error);
    });
};

module.exports = {
  list: list
};
