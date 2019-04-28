const restaurant = require('../controllers').restaurant;

var router = require('express').Router();

router.get('/list', restaurant.list);

module.exports = router;