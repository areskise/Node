const User = require('../models/user');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

exports.postLogin = (req, res, next) => {
    const { email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.statusMessage = errors.array()[0].msg;
        return res.status(400).end();
    } else {
        User.findOne({ email: email })
        .then(user => {
            bcrypt.compare(password, user.password)
            .then(doMatch  => {
                if (doMatch) {
                    req.session.user = user;
                    req.session.loggedIn = true;
                    req.flash('loggedIn', 'Successfully logged in!');
                    req.session.save((err) => {
                        if (err) console.log(err);
                        console.log('session created!', req.session);
                        res.statusMessage = req.flash('loggedIn')
                        return res.status(200).end();
                    })
                } else {
                    req.flash('errorLogin', 'Invalid email or password!');
                    res.statusMessage = req.flash('errorLogin')
                    return res.status(400).end();
                }
            })
            .catch(err => console.log(err));
        })
    }
}

exports.postSignup = (req, res, next) => {
    const { email, password, confirmPassword } = req.body;
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        res.statusMessage = errors.array()[0].msg;
        return res.status(400).end();
    }
        bcrypt.hash(password, 12)
            .then(hashedPassword => {
            const user = new User({
                email: email,
                password: hashedPassword,
                cart: { item: [] }
            });
            user.save()
                .then(result => {
                res.statusMessage = 'New user created!';
                return res.status(200).end();
            })
        })
}

exports.postLogout = (req, res, next) => {
    req.session.destroy((err) => {
        res.cookie('loggedIn', false).status(200).json('Logout success!');
    })
};