const express = require('express');
const cors = require('cors');
const mongoConnect = require('./util/database').mongoConnect;

const app = express();

const productRoutes = require('./routes/product');
// const cartRoutes = require('./routes/cart');

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    // User.findByPk(1)
    //     .then(user => {
    //         req.user = user;
    //         next();
    //     })
    //     .catch(err => console.log(err));
    next();
})

app.use(productRoutes);
// app.use(cartRoutes);

mongoConnect(() => {
    app.listen(5000);
  });