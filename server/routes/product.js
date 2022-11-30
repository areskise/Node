const express = require('express');

const productsController = require('../controllers/product');

const router = express.Router();

router.get('/products', productsController.getProducts);

router.post('/add-product', productsController.postAddProduct);

router.delete('/delete-product', productsController.deleteProduct);


module.exports = router;