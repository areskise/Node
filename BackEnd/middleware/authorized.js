const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.use('/api', (req, res, next) => {
  const reqToken = req.query.token;
  User.fetchAll((users) => {
    const user = users.find((user) => user.token === reqToken);
    if (user) {
      next();
    }
    else {
      res.statusMessage = 'Unauthorized';
      res.statusCode = 401;
      res.end();
    }
  })
})

module.exports = router;