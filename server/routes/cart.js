const express = require('express');

const cartController = require('../controllers/cart');
const isAuth = require('../middlewares/is-auth');

const router = express.Router();

router.get('/cart', isAuth, cartController.getCart);

router.post('/cart', isAuth, cartController.postCart);

router.post('/cart-delete-item', isAuth, cartController.postCartDeleteProduct);

router.get('/orders', isAuth, cartController.getOrders);

router.post('/create-order', isAuth, cartController.postOrder);

module.exports = router;