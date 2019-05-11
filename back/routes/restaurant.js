const restaurant = require('../controllers').restaurant;
const guard = require('../controllers').guard;

var router = require('express').Router();

router.get('/listOfNearby', restaurant.listOfNearby);
router.get('/productsList', restaurant.productsList);

module.exports = router;