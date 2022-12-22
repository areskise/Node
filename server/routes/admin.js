const express = require('express');

const controllers = require('../controllers/admin');

const router = express.Router();

router.post('/admin/add', controllers.addProduct);

router.put('/admin/update', controllers.updateProduct);

router.delete('/admin/delete', controllers.deleteProduct);

module.exports = router;