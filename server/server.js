const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');

app.use(cors());
app.use(express.json());

app.use(productRoutes);
app.use(cartRoutes);

mongoose
    .connect('mongodb+srv://areskise:24110399@cluster0.vsce8sb.mongodb.net/shop?retryWrites=true&w=majority')
    .then(result => {
        app.listen(5000);
    })
    .catch(err => {
        console.log(err);
    });