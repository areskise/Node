const express = require('express');

const productsController = require('../controllers/product');
const isAuth = require('../middlewares/is-auth');

const router = express.Router();

router.get('/products', productsController.getProducts);

router.get('/products/:productId', productsController.getProduct);

router.post('/add-product', isAuth, productsController.postAddProduct);

router.delete('/delete-product', isAuth, productsController.deleteProduct);

router.get('/edit-product/:productId', isAuth, productsController.getEditProduct);

router.post('/edit-product/:productId', isAuth, productsController.postEditProduct);

module.exports = router;