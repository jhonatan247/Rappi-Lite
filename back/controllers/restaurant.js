let Restaurant = require('../sequelize-models').Restaurant;

let list = (req, res, next) => {
  return Restaurant
    .findAll({
      order: [
        ['createdAt', 'DESC'],
        // [{ model: Address }, 'createdAt', 'DESC'],
      ],
    })
    .then((restaurants) => res.status(200).send(restaurants))
    .catch((error) => {
      res.status(400).send(error);
    });
}

module.exports = {
  list: list
};
