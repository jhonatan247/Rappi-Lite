const shoppingCart = require('../controllers').shoppingCart;
const guard = require('../controllers').guard;

var router = require('express').Router();

router.post('/add-offer', guard.authorize, shoppingCart.addOffer);
router.post('/checkout', guard.authorize, shoppingCart.checkout);

module.exports = router;