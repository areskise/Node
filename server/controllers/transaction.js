const Transaction = require('../models/transaction');

exports.getUserTransactions = (req, res, next) => {
    Transaction.find({user: req.query.user})
        .then(transactions => {
            res.status(200).send(transactions)
        })
        .catch(err => console.log(err));
};

exports.postTransactions = (req, res, next) => {
    console.log(req.body);
    const newTransaction = new Transaction(req.body);
    newTransaction.save()
        .then(results => {
            console.log('ADDED TRANSACTION: ',results);
            res.status(200).end();
        })
        .catch(err => console.log('ADDED TRANSACTION ERROR: ',err));
};

exports.getAdminTransactions = (req, res, next) => {
    const limit = 8;
    const page = req.query.page
    const skip = (page -1) * limit
    Transaction.find().limit(limit).sort({createAt: 'desc'}).skip(skip)
        .then(transactions => {
            res.status(200).send(transactions)
        })
        .catch(err => console.log(err));
};