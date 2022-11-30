const Product = require('../models/product');

exports.postAddProduct = (req, res, next) => {
    Product.create({
        title: req.body.title,
        price: req.body.price,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
    })
    .then(results => res.statusCode = 200)
    .catch(err => console.log(err));
};

exports.getProducts = (req, res, next) => {
    Product.findAll()
    .then(products => {
      res.send(products);
    })
    .catch(err => console.log(err));
};

exports.deleteProduct = (req, res, next) => {
    const prodId = req.query.id;
    Product.findByPk(prodId)
      .then(product => {
        return product.destroy();
      })
      .then(results => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end();
      })
      .catch(err => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
    const prodId = req.params.productId;
    console.log(req);
    Product.findByPk(prodId)
        .then(product => {
            res.send(product);
        })
        .catch(err => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
    const postProduct = req.body;
    Product.update({ ...postProduct }, { where: { id: postProduct.id } })
        .catch(err => console.log(err));

}