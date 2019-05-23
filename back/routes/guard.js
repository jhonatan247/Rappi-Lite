const guard = require('../controllers').guard;

var router = require('express').Router();

router.post('/login', guard.authenticate);
router.post('/login-with-token', guard.authenticateWithToken);
router.post('/sign-out', guard.authorize, guard.disavow);

module.exports = router;
