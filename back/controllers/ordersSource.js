let OrdersSource = require('../models').OrdersSource;

module.exports.createOrders = (req, res) => {
    req.decoded = {
        id: 4
    }
    OrdersSource.addOrders(req.body.offers, req.decoded.id)
    .then((order) => {
        res.json({
            success: true,
            order: order
        });
    })
    .catch(error => res.status(500).json({ message: error.message }));
};