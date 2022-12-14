const express = require('express');

const { validateLogin, validateSignup } = require('./../middlewares/validate');
const authController = require('../controllers/auth');

const router = express.Router();

router.post('/login', validateLogin, authController.postLogin);

router.post('/signup', validateSignup, authController.postSignup);

router.post('/logout', authController.postLogout);

module.exports = router;