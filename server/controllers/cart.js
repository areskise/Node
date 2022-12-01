const Product = require('../models/product');

exports.getCart = (req, res, next) => {
    req.user
        .getCart()
        .then(products => {
            res.send(products);
        })
        .catch(err => console.log(err));
};

exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId)
        .then(product => {
            return req.user.addToCart(product);
        })
        .then(result => {
            console.log(result);
        })
        .catch(err => console.log(err));
};

exports.postCartDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    req.user
        .deleteItemFromCart(prodId)
        .then(result => {
            res.send(result);
        })
        .catch(err => console.log(err));
};

exports.getOrders = (req, res, next) => {
    req.user
        .getOrders()
        .then(orders => {
            res.send(orders);
        })
        .catch(err => console.log(err));
};

exports.postOrder = (req, res, next) => {
    let fetchedCart;
    req.user
        .addOrder()
        .then(result => {
        res.send(result);
        })
        .catch(err => console.log(err));
};
