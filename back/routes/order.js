const ordersSource = require('../controllers').ordersSource;
const guard = require('../controllers').guard;

var router = require('express').Router();

router.post('/checkout', guard.authorize, ordersSource.createOrders);

module.exports = router;