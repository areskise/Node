const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const User = require('./models/user');

const app = express();

const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    User.findById('6388de0d8a0b06248af791bc')
      .then(user => {
        req.user = user;
        next();
      })
      .catch(err => console.log(err));
  });

app.use(productRoutes);
app.use(cartRoutes);

mongoose
    .connect('mongodb+srv://areskise:24110399@cluster0.vsce8sb.mongodb.net/shop?retryWrites=true&w=majority')
    .then(result => {
        User.findOne().then(user => {
            if (!user) {
                const user = new User({
                    name: 'Ares Kise',
                    email: 'areskise@gmail.com',
                    cart: {
                    items: [],
                    },
                });
                user.save();
            }
        });
        app.listen(5000);
})
.catch(err => {
    console.log(err);
});