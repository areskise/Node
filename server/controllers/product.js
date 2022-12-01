const Product = require('../models/product');

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, price, imageUrl, description);
    product
        .save()
        .then(results => res.statusCode = 200)
        .catch(err => console.log(err));
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll()
        .then(products => {
            res.send(products);
        })
        .catch(err => console.log(err));
};

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId)
        .then(product => {
        res.send(product);
        })
        .catch(err => console.log(err));
};

exports.deleteProduct = (req, res, next) => {
    const prodId = req.query.id;
    Product.deleteOne({_id: new ObjectId(prodId)})
        .then(results => {
            console.log('DELETED PRODUCT');
        })
        .catch(err => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId)
        .then(product => {
            res.send(product);
        })
        .catch(err => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
    const prodId = req.params.productId;
    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDesc = req.body.description;
    const product = new Product(
        updatedTitle,
        updatedPrice,
        updatedImageUrl,
        updatedDesc,
        prodId
    );
    product
        .save()
        .then(result => {
            console.log('UPDATED PRODUCT!');
        })
        .catch(err => console.log(err));

}