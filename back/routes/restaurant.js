const restaurant = require('../controllers').restaurant;
const guard = require('../controllers').guard;
const product = require('../controllers').product;

var router = require('express').Router();

router.get('/listOfNearby', guard.authorize, restaurant.listOfNearby);
router.post('/productsList', guard.authorize, product.list);

module.exports = router;