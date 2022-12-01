const express = require('express');

const productsController = require('../controllers/product');

const router = express.Router();

router.get('/products', productsController.getProducts);

router.post('/add-product', productsController.postAddProduct);

router.get('/products/:productId', productsController.getProduct);

// router.delete('/delete-product', productsController.deleteProduct);

router.get('/edit-product/:productId', productsController.getEditProduct);

router.post('/edit-product/:productId', productsController.postEditProduct);

module.exports = router;