var express = require('express');
var router = express.Router();

let authentication = require('../auth/authentication.js');
let authorization = require('../auth/authorization.js');
let user = require('../controllers/user.js');

let home = (req, res) => {
  res.json({
    success: true,
    message: 'Home page'
  });
}

router.post('/login', authentication.createToken);
router.post('/signup', user.toRegister);
router.post('/signout', authorization.checkToken, authentication.deleteToken);
router.get('/home', authorization.checkToken, home);

module.exports = router;
