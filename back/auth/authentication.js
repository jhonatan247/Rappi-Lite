let jwt = require('jsonwebtoken');
const config = require('../config/config.js');
let User = require('../models').User;

let createToken = (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;
  if(email)
    user = User.findAll({
      where: {email: email}
    })
    .then((user) =>{
      if (email && password) {
        dbPassword = user[0] ? user[0].dataValues.password : "";
        if (password === dbPassword) {
          let token = jwt.sign({email: email}, config.secret, {expiresIn: '24h'});
          console.log(token);
          res.json({
            success: true,
            message: 'Authentication successful',
            token: token
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