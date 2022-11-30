const express = require('express');
const cors = require('cors');
const sequelize = require('./util/database');

const app = express();

const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');

app.use(cors());
app.use(express.json());

app.use(productRoutes);
app.use(cartRoutes);

sequelize.sync()
    .then(results => app.listen(5000))
    .catch(err => console.log(err));