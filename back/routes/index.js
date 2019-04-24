var express = require('express');
var cors = require('cors');

var config = require('../config/config.js');
let authentication = require('../auth/authentication.js');
let authorization = require('../auth/authorization.js');
let user = require('../controllers/user.js');

let address = require('../controllers/address.js');

var router = express.Router();

// Example using cors:
/*
app.get('/products/:id', cors(config.corsOptions), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for only example.com.'})
});

*/
// User
router.post('/login', authentication.createToken);
router.post('/signup', user.register);
router.post('/signout', authorization.checkToken, authentication.deleteToken);

router.post('/address', address.save);

module.exports = router;
