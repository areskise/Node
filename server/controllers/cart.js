const Product = require('../models/product');
const Order = require('../models/order');

exports.getCart = (req, res, next) => {
    req.user
        .populate('cart.items.productId')
        .then(user  => {
            res.send(user.cart.items );
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
        .removeFromCart(prodId)
        .then(result => {
            res.send(result);
        })
        .catch(err => console.log(err));
};

// exports.getOrders = (req, res, next) => {
//     req.user
//         .getOrders()
//         .then(orders => {
//             res.send(orders);
//         })
//         .catch(err => console.log(err));
// };

exports.postOrder = (req, res, next) => {
    req.user
        .populate('cart.items.productId')
        .then(user => {
            const products = user.cart.items.map(i => {
                return { quantity: i.quantity, product: i.productId };
            });
            const order = new Order({
                user:{ 
                    name: req.user.name, 
                    userId: req.user 
                },
                products: products,
            });
            return order.save();
        })
        .then(result => {
            console.log(result);
        })
        .catch(err => console.log(err));
};
