const User = require('../models/user');
const Transaction = require('../models/transaction');

exports.getUserTransactions = (req, res, next) => {
    const userId = req.user.id;
    const user = User.findById(userId);
    Transaction.find({user: user.username})
        .then(transactions => {
            res.status(200).send(transactions)
        })
        .catch(err => console.log(err));
};

exports.postTransactions = (req, res, next) => {
    const userId = req.user.id;
    const user = User.findById(userId);
    const hotelId = req.params.hotelId;
    const newTransaction = new Transaction({
        ...red.body, 
        user: user, 
        hotel: hotelId,
    });
    newTransaction.save()
        .then(results => {
            console.log('ADDED TRANSACTION: ',results);
            res.status(200).end();
        })
        .catch(err => console.log(err));
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