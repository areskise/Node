const express = require('express');

const transactionController = require('../controllers/transaction');

const router = express.Router();

router.get('/admin-transactions', transactionController.getAdminTransactions);

router.get('/last-transactions', transactionController.getLastTransactions);

router.get('/user-transactions', transactionController.getUserTransactions);

router.post('/transactions', transactionController.postTransactions);

module.exports = router;