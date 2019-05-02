const restaurant = require('../controllers').restaurant;
const guard = require('../controllers').guard;

var router = require('express').Router();

router.get('/listOfNearby', guard.authorize, restaurant.listOfNearby);

module.exports = router;