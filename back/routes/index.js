var express = require('express');
var router = express.Router();
const userController = require('../controllers').user;
const addressController = require('../controllers').address;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// User
router.get('/api/user', userController.list);
router.get('/api/user/:id', userController.getById);
router.get('/api/user/:email', userController.getByEmail);
router.post('/api/user', userController.add);
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
