const User = require('../models').User;

let register = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let type = req.body.type;
  let id_number = req.body.id_number;
  let name = req.body.name;
  let phone = req.body.phone;
  if(email && password && type && id_number && name && phone) {
    User.create({
        type: req.body.type,
        name: req.body.name,
        id_number: req.body.id_number,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password
      })
      .then((user) => res.status(201).send(user))
      .catch((error) => res.status(400).send(error));
  } else {
    res.status(400).json({
      success: false,
      message: 'There is no email'
    });
  }
}

module.exports = {
  register: register
};

/*
module.exports = {
  list(req, res) {
    return User
      .findAll({
        order: [
          ['createdAt', 'DESC']
        ],
      })
      .then((users) => res.status(200).send(users))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return User
      .findByPk(req.params.id)
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return res.status(200).send(user);
      })
      .catch((error) => res.status(400).send(error));
  },

  getByEmail(req, res) {
    return User
      .findAll({
        where: {
          email: req.query.email
        }
      })
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return res.status(200).send(user);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return User
      .create({
        type: req.query.type,
        name: req.query.name,
        id_number: req.query.id_number,
        phone: req.query.phone,
        email: req.query.email,
        password: req.query.password
      })
      .then((user) => res.status(201).send(user))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return User
      .findByPk(req.params.id)
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return user
          .update({
            type: req.query.type || user.type,
            name: req.query.name || user.name,
            id_number: req.query.id_number || user.id_number,
            phone: req.query.phone || user.phone,
            email: req.query.email || user.email,
            password: req.query.password || user.password
          })
          .then(() => res.status(200).send(user))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return User
      .findByPk(req.params.id)
      .then(user => {
        if (!user) {
          return res.status(400).send({
            message: 'User Not Found',
          });
        }
        return user
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  register(req, res) {
    let email = req.body.email;
    let password = req.body.password;
    let type = req.body.type;
    let id_number = req.body.id_number;
    let name = req.body.name;
    let phone = req.body.phone;
    if(email && password && type && id_number && name && phone) {
      User.create({
          type: req.body.type,
          name: req.body.name,
          id_number: req.body.id_number,
          phone: req.body.phone,
          email: req.body.email,
          password: req.body.password
        })
        .then((user) => res.status(201).send(user))
        .catch((error) => res.status(400).send(error));
    } else {
      res.status(400).json({
        success: false,
        message: 'One of the parameters is incorrect'
      });
    }
  },
};
*/