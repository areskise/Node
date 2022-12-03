const Transaction = require('../models/transaction');

exports.getUserTransactions = (req, res, next) => {
    
};

exports.postTransactions = (req, res, next) => {
    
};

exports.getLastTransactions = (req, res, next) => {
    const limit = 8;
    const page = +req.query.page;
    const skip = (page - 1) * limit
    Transaction.find().skip(skip).limit(limit)
        .then(Transaction)
};

exports.getAdminTransactions = (req, res, next) => {
    
};