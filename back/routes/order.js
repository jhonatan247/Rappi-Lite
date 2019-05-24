const ordersSource = require('../controllers').ordersSource;
const guard = require('../controllers').guard;

var router = require('express').Router();

router.post('/checkout', ordersSource.createOrders);

module.exports = router;