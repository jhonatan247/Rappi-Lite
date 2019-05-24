var cors = require('cors');
var config = require('../config/config.js');
// Example using cors:
/*
app.get('/products/:id', cors(config.corsOptions), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for only example.com.'})
});
*/
const User = require('../models').User;

module.exports.register = (req, res) => {
  if (
    req.body.email &&
    req.body.password &&
    req.body.type &&
    req.body.id_number &&
    req.body.name &&
    req.body.phone
  ) {
    User.register(req.body)
      .then(() => {
        res.json({
          success: true,
          message: 'user succesful created'
        });
      })
      .catch(error => res.status(500).json({ message: error.message }));
  } else {
    res.status(400).json({
      success: false,
      message: 'wrong Parameters'
    });
  }
};
