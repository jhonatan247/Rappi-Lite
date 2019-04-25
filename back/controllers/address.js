const Address = require('../models').Address;

let save = (req, res) => {
  let user_id = req.body.user_id;
  let restaurant_id = req.body.restaurant_id;
  let value = req.body.value;
  let latitude = req.body.latitude;
  let longitude = req.body.longitude;
  if(value && latitude && longitude && (user_id || restaurant_id) ) {
    if (user_id) {
      Address.create({
        user_id: user_id,
        restaurant_id: 0,
        value: value,
        latitude: latitude,
        longitude: longitude
      })
      .then((address) => res.status(201).send(address))
      .catch((error) => res.status(400).send(error));
    } else {
      Address.create({
        user_id: 0,
        restaurant_id: restaurant_id,
        value: value,
        latitude: latitude,
        longitude: longitude
      })
      .then((address) => res.status(201).send(address))
      .catch((error) => res.status(400).send(error));
    }
  } else {
    res.status(400).json({
      success: false,
      message: 'Wrong Parameters'
    });
  }
}

module.exports = {
  save: save
};

/*
module.exports = {
  list(req, res) {
    return Address
      .findAll({
        order: [
          ['createdAt', 'DESC'],
          // [{ model: Address }, 'createdAt', 'DESC'],
        ],
      })
      .then((addresses) => res.status(200).send(addresses))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Address
      .findByPk(req.params.id)
      .then((address) => {
        if (!address) {
          return res.status(404).send({
            message: 'Address Not Found',
          });
        }
        return res.status(200).send(address);
      })
      .catch((error) => res.status(400).send(error));
  },

  getByUserId(req, res) {
    return Address
      .findAll({
        where: {
          // user_id: req.params.user_id
          user_id: req.query.user_id
        }
      })
      .then((address) => {
        if (!address) {
          return res.status(404).send({
            message: 'Address Not Found',
          });
        }
        return res.status(200).send(address);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Address
      .create({
        value: req.query.value,
        user_id: req.query.user_id
      })
      .then((address) => res.status(201).send(address))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Address
      .findByPk(req.params.id)
      .then(address => {
        if (!address) {
          return res.status(404).send({
            message: 'Address Not Found',
          });
        }
        return address
          .update({
            value: req.query.value || address.value,
            user_id: req.query.user_id || address.user_id
          })
          .then(() => res.status(200).send(address))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Address
      .findByPk(req.params.id)
      .then(address => {
        if (!address) {
          return res.status(400).send({
            message: 'Address Not Found',
          });
        }
        return address
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
*/
