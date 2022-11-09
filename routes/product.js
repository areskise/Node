const express = require('express');

const productsController = require('../controllers/product');

const router = express.Router();

router.get('/', productsController.getProducts);

router.post('/add-product', productsController.postAddProduct);

module.exports = router;