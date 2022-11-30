const Product = require('../models/product');

exports.postAddProduct = (req, res, next) => {
    req.user
        .createProduct({
        title: req.body.title,
        price: req.body.price,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        })
        .then(results => res.statusCode = 200)
        .catch(err => console.log(err));
};

exports.getProducts = (req, res, next) => {
    req.user
        .getProducts()
        .then(products => {
        res.send(products);
        })
        .catch(err => console.log(err));
};

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    req.user
        .getProducts({ where: { id: prodId } })
        .then(products => {
        res.send(products[0]);
        })
        .catch(err => console.log(err));
};

exports.deleteProduct = (req, res, next) => {
    const prodId = req.query.id;
    req.user
        .getProducts({ where: { id: prodId } })
        .then(product => {
            return product[0].destroy();
        })
        .then(results => {
            console.log('DESTROYED PRODUCT');
        })
        .catch(err => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
    const prodId = req.params.productId;
    req.user
        .getProducts({ where: { id: prodId } })
        .then(product => {
            res.send(product[0]);
        })
        .catch(err => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
    const postProduct = req.body;
    Product.update({ ...postProduct }, { where: { id: postProduct.id } })
        .then(result => {
            console.log('UPDATED PRODUCT!');
        })
        .catch(err => console.log(err));

}