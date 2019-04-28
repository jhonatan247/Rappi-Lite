const authentication = require('../auth/authentication');
const authorization = require('../auth/authorization');

var router = require('express').Router();

router.post('/login', authentication.createToken);
router.post('/signout', authorization.checkToken, authentication.deleteToken);

module.exports = router;