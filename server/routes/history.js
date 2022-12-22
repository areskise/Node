const express = require('express');

const { verifyToken } = require('../middlewares/is-auth');
const controllers = require('../controllers/order');

const router = express.Router();

router.get('/histories', verifyToken, controllers.getHistoryAPI);

router.get('/histories/:id', verifyToken, controllers.getDetail);

module.exports = router;