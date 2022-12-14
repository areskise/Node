const { body } = require('express-validator');
const User = require('../models/user');

exports.validateLogin = [
    body('email')
        .notEmpty()
        .isEmail()
        .withMessage('Please enter email!')
        .custom((value, { req }) => {
            return User
                .findOne({ email: value })
                .then(user => {
                if (!user) {
                    return Promise.reject('Email is not exists already!');
                }
                }) 
            }),
    body('password')
        .notEmpty()
        .withMessage('Please enter password')
];

exports.validateSignup = [
    body('email')
        .notEmpty()
        .isEmail()
        .withMessage('Please enter valid email!')
        .custom((value, { req }) => {
        return User
            .findOne({ email: value })
            .then(user => {
            if (user) {
                return Promise.reject('Email is exists already!');
            }
            }) 
        }),
    body('password', 'Please enter password longer than 8 characters')
        .notEmpty()
        .isLength({ min: 8 }),
    body('confirmPassword')
        .notEmpty()
        .custom((value, { req }) => {
        if (value !== req.body.password) {
        throw new Error('Confirm password must be same as password!');
        }
        return true;
    })
];