const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const hotelRoutes = require('./routes/hotel');
const roomRoutes = require('./routes/room');
const transactionRoutes = require('./routes/transaction');
const userRoutes = require('./routes/user');

app.use(cors());
app.use(express.json());

app.use(userRoutes);
app.use(hotelRoutes);
app.use(roomRoutes);
app.use(transactionRoutes);

mongoose
    .connect('mongodb+srv://areskise:24110399@cluster0.vsce8sb.mongodb.net/booking?retryWrites=true&w=majority')
    .then(result => {
        app.listen(5000);
    })
    .catch(err => {
        console.log(err);
    });