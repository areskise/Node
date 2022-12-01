const express = require('express');
const cors = require('cors');
const mongoConnect = require('./util/database').mongoConnect;
const User = require('./models/user');

const app = express();

const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    User.findById('63888b269c6ab35dabf506aa')
        .then(user => {
            req.user = new User(user.name, user.email, user.cart, user._id);
            next();
        })
        .catch(err => console.log(err));
})

app.use(productRoutes);
app.use(cartRoutes);

mongoConnect(() => {
    app.listen(5000);
  });