const express = require('express');
const cors = require('cors');

const app = express();

const productRoutes = require('./routes/product');

app.use(cors());
app.use(express.json());

app.use(productRoutes);

app.listen(5000);