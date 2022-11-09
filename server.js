const express = require('express');
const cors = require('cors');

const app = express();

const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');

app.use(cors());
app.use(express.json());

app.use(productRoutes);
app.use(cartRoutes);

app.listen(5000);