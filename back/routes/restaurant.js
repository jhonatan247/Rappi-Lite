const restaurant = require('../controllers').restaurant;
const guard = require('../controllers').guard;

var router = require('express').Router();

router.get('/list-of-nearby', guard.authorize, restaurant.listOfNearby);
router.get('/products-list', guard.authorize, restaurant.productsList);

module.exports = router;
