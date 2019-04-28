let jwt = require('jsonwebtoken');
const config = require('../config/config.js');
let User = require('../sequelize-models').User;

let createToken = (req, res, next) => {
  console.log(req.body);
  let email = req.body.email;
  let password = req.body.password;
  if(email)
    user = User.findAll({
      where: {email: email}
    })
    .then((user) =>{
      user = user[0].dataValues;
      if (email && password) {
        if (password === user.password) {
          let token = jwt.sign({email: email}, config.secret, {expiresIn: '24h'});
          console.log(token);
          res.json({
            success: true,
            message: 'Authentication successful',
            token: token,
            data:{
              type: user.type,
              name: user.name,
              id_number: user.id_number,
              phone: user.phone,
              email: user.email,
            }
          });
        } else {
          res.status(403).json({
            success: false,
            message: 'Incorrect email or password'
          });
        }
      } else {
        res.status(400).json({
          success: false,
          message: 'Authentication failed! Please check the request'
        });
      }
    })
    .catch((error) => res.status(400).send({error:error}));
  else
    res.status(400).json({
      success: false,
      message: 'There is no email'
    });
}

let deleteToken = (req, res) => {
  //Manage the signout of a user.
}

module.exports = {
  createToken: createToken,
  deleteToken: deleteToken
}
