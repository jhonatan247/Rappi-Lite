const User = require('../models').User;

let toRegister = (req, res) => {
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
  toRegister: toRegister
};