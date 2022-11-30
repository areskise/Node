const Product = require('../models/product');
const Cart = require('../models/cart');
const Order = require('../models/order');

exports.getCart = (req, res, next) => {
    req.user
        .getCart()
        .then(cart => {
            return cart
                .getProducts()
                .then(products => {
                    res.send(products);
                })
                .catch(err => console.log(err));
            })
        .catch(err => console.log(err));
};

exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    let fetchedCart;
    let newQuantity = 1;
    req.user
        .getCart()
        .then(cart => {
        fetchedCart = cart;
        return cart.getProducts({ where: { id: prodId } });
        })
        .then(products => {
        let product;
        if (products.length > 0) {
            product = products[0];
        }

        if (product) {
            const oldQuantity = product.cartItem.quantity;
            newQuantity = oldQuantity + 1;
            return product;
        }
        return Product.findByPk(prodId);
        })
        .then(product => {
        return fetchedCart.addProduct(product, {
            through: { quantity: newQuantity },
        });
        })
        .then(() => {
            res.json(req.body);
        })
        .catch(err => console.log(err));
};

exports.postCartDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    req.user
        .getCart()
        .then(cart => {
        return cart.getProducts({ where: { id: prodId } }).then(products => {
            const product = products[0];
            return product.cartItem.destroy();
        });
        })
        .then(result => {
            res.send(result);
        })
        .catch(err => console.log(err));
};

exports.getOrders = (req, res, next) => {
    req.user
        .getOrders({ include: ['products'] })
        .then(orders => {
            res.send(orders);
        })
        .catch(err => console.log(err));
};

exports.postOrder = (req, res, next) => {
    let fetchedCart;
    req.user
        .getCart()
        .then(cart => {
        fetchedCart = cart;
        return cart.getProducts();
        })
        .then(products => {
        return req.user
            .createOrder()
            .then(order => {
            return order.addProducts(
                products.map(product => {
                product.orderItem = { quantity: product.cartItem.quantity };
                return product;
                })
            );
            })
            .catch(err => console.log(err));
        })
        .then(result => {
        fetchedCart.setProducts(null);
        })
        .then(result => {
        res.send(result);
        })
        .catch(err => console.log(err));
};
