const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user')

exports.postSignIn = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json(errors.array()[0].msg);
    }

    const { email, password } = req.body;
    User.findOne({ email: email })
        .then(user => {
            if(bcrypt.compareSync(password, user.password)) {
                const token = jwt.sign(
                    {user},
                    'secret',
                    { expiresIn: '1d' }
                );
                res.cookie('access_token', token, {
                    maxAge: 86400000,
                    httpOnly: false,
                })
                res.cookie('user', user, {
                    maxAge: 86400000,
                    httpOnly: false,
                })
                res.status(200).json('Logged in successfully');
            } else {
                return res.status(401).json('Wrong password!');
            }
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        })
}

exports.postSignUp = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json(errors.array()[0].msg);
    }
    
    const { fullName, email, password, phone } = req.body;
    try {
        const hashedPass = await bcrypt.hash(password, 12);
        const user = new User({
            fullName: fullName,
            email: email,
            password: hashedPass,
            phone: phone,
            cart: { items: [] }
        });
        const result = await user.save();
        res.status(201).json({ message: 'User created!', userId: result._id });
    } catch(err) { 
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.postLogOut = (req, res, next) => {
    res.clearCookie('access_token');
    res.clearCookie('user');
    res.status(200).json('Logged out successfully')
}

exports.getAllData = (req, res, next) => {

}

exports.getDetailData = (req, res, next) => {

}