const user = require('../controllers').user;

var router = require('express').Router();

router.post('/signup', user.register);

module.exports = router;