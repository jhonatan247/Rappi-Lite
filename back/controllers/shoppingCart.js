let ShoppingCart = require('../models').ShoppingCart;

module.exports.addOffer = (req, res) => {
  ShoppingCart.getOfferAndShoppingCart(req.decoded.id, req.body.offer).then(result => 
    ShoppingCart.addOffer(req.decoded.id, req.body.offer, req.body.quantity, result.shoppingCart, result.offer)
    .then(() =>
      res.json({
        success: true,
        message: "Product correctly addded"
      })
    )
  )
  .catch(error => {console.log(error);res.status(500).json({ message: error.message })});
}