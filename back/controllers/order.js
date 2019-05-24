let OrdersRepository = require('../models').OrdersRepository;

module.exports.createOrders = (req, res) => {
    OrdersRepository.addOrders(req.body.offers, req.decoded.id)
    .then((order) => {
        res.json({
            success: true,
            order: order
        });
    })
    .catch(error => res.status(500).json({ message: error.message }));
};