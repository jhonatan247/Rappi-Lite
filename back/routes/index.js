var express = require('express');
var router = express.Router();
const userController = require('../controllers').user;
const addressController = require('../controllers').address;
let authentication = require('../auth/authentication.js');
let authorization = require('../auth/authorization.js');
let user = require('./user');

let home = (req, res) => {
  res.json({
    success: true,
    message: 'Home page'
  });
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// User
router.post('/api/login', authentication.createToken);
router.post('/api/signup', user.toRegister);
//authorization must be used always when a protected resource is accessed
router.post('/api/signout', authorization.checkToken, authentication.deleteToken);
router.get('/api/home', authorization.checkToken, home);
router.get('/api/user', userController.list);
router.get('/api/user/:id', userController.getById);
router.get('/api/user/:email', userController.getByEmail);
router.put('/api/user/:id', userController.update);
router.delete('/api/user/:id', userController.delete);
// Address
router.get('/api/address', addressController.list);
router.get('/api/address/:id', addressController.getById);
router.get('/api/address/:user_id', addressController.getByUserId);
router.post('/api/address', addressController.add);
router.put('/api/address/:id', addressController.update);
router.delete('/api/address/:id', addressController.delete);

module.exports = router;
