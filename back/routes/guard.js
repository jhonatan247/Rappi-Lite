const guard = require('../controllers').guard;

var router = require('express').Router();

router.post('/login', guard.createToken);
router.post('/signout', guard.checkToken, guard.deleteToken);

module.exports = router;