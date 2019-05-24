const order = require('../controllers').order;
const guard = require('../controllers').guard;

var router = require('express').Router();

router.post('/checkout', guard.authorize, order.createOrders);

module.exports = router;