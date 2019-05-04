const restaurant = require('../controllers').restaurant;
const guard = require('../controllers').guard;

var router = require('express').Router();

router.get('/listOfNearby', guard.authorize, restaurant.listOfNearby);
router.post('/productsList', guard.authorize, restaurant.productsList);

module.exports = router;