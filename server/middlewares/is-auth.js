module.exports = (req, res, next) => {
console.log(req.user);

    if (req.user) {
      return next();
    } else {
      return res.status(401).send('You not authentication!');
    }
  };