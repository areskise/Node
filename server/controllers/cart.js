const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getCart = (req, res, next) => {
    Cart.addProduct((cart) => {
        res.send(cart);
    });
};

exports.postCart = (req, res, next) => {
    const prodId = req.body.id;
    Product.findById(prodId, () => {
      Cart.addProduct(prodId, req.body.price);
    });
};