const address = require('../controllers').address;

var router = require('express').Router();

router.post('/save', address.save);

module.exports = router;