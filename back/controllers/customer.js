let Customer = require('../models').Customer;

module.exports.saveAddress = (req, res) => {
  if (
    req.body.value &&
    req.body.latitude &&
    req.body.longitude
  ) {
    Customer.saveAddress(req.body, req.decoded.id)
    .then(() =>
      res.json({
        success: true,
        message: 'Address succesful created'
      })
    )
    .catch(error => res.status(500).json({message: error.message}));
  } else {
    res.status(400).json({
      success: false,
      message: 'Wrong Parameters'
    });
  }
}

module.exports.addressesById = (req, res) => {
  Customer.addressesById(req.decoded.id)
  .then((addresses) =>
    res.json({
      success: true,
      addresses: addresses
    })
  )
  .catch(error => res.status(500).json({message: error.message}));
}

module.exports.personalInfoById = (req, res) => {
  Customer.personalInfoById(req.decoded.id)
  .then((personalInfo) =>
    res.json({
      success: true,
      personalInfo: personalInfo
    })
  )
  .catch(error => res.status(500).json({message: error.message}));
}