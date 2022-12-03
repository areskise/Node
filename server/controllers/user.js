const User = require('../models/user');

exports.login = async (req, res, next) => {
    const user = await User.findOne({username: req.body.username})
    if(!user) {
        return res.status(404).json({ message: 'Not Found User!' });
    }
    if(user.password !==  req.body.password) {
        return res.status(401).json({ message: 'Password Incorrect!' });
    }
    else {
        return res.status(200).send(user)
    }
};

exports.signUp = async (req, res, next) => {
    const user = await User.findOne({username: req.body.username})
    if(user) {
        return res.status(404).json({ message: 'Username Already Exists!' });
    }
    else {
        const newUser = new User({
            username: req.body.username,
            password: req.body.password,
            fullName: req.body.fullName,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
        });
        newUser.save()
            .then(results => {
                console.log(results);
                res.status(200).end();
            })
            .catch(err => console.log(err));
    }
};