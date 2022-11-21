const User = require('../models/user');

exports.getUsers = (req, res, next) => {
    User.fetchAll((users) => {
        res.send(users);
    });
};