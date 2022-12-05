const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

router.post('/login', userController.login);

router.post('/logout', userController.logout);

router.post('/sign-up', userController.signUp);

module.exports = router;