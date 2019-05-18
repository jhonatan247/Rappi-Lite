const customer = require('../controllers').customer;
const guard = require('../controllers').guard;

var router = require('express').Router();

router.post('/save-address', guard.authorize, customer.saveAddress);
router.post('/select-address', guard.authorize, customer.selectAddress);
router.get('/addresses', guard.authorize, customer.addressesById);
router.get('/personal-info', guard.authorize, customer.personalInfoById);

module.exports = router;