const Address = require('../models').Address;

let save = (req, res) => {
  console.log(req.body);
  if (
    req.body.value &&
    req.body.latitude &&
    req.body.longitude &&
    req.body.user_id
  ) {
    Address.save(req.body)
    .then(() =>
      res.json({
        success: true,
        message: 'Address succesful created'
      })
    )
    .catch(error => res.status(400).send(error));
  } else {
    res.status(400).json({
      success: false,
      message: 'Wrong Parameters'
    });
  }
};

module.exports = {
  save: save
};
