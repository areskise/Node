const User = require('../models/user');

exports.login = async (req, res, next) => {
    await User.findOne({username: req.body.username})
        .then(user => {
            if(!user) {
                return res.status(404).json({ message: 'Not Found User!' });
            }
            if(user.password !==  req.body.password) {
                return res.status(401).json({ message: 'Password Incorrect!' });
            }
            else {
                req.user = user;
                next();
                return res.status(200).send(req.user)
            }
          })
          .catch(err => console.log(err))
        
    
};

exports.logout = (req, res, next) => {
    req.user = null;
    res.status(200).send(req.user)
};

exports.signUp = async (req, res, next) => {
    const user = await User.findOne({username: req.body.username})
    if(user) {
        return res.status(404).json({ message: 'Username Already Exists!' });
    }
    else {
        const newUser = new User(req.body);
        newUser.save()
            .then(results => {
                console.log('ADDED USER: ',results);
                res.status(200).end();
            })
            .catch(err => console.log(err));
    }
};