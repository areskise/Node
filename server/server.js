const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const flash = require('connect-flash');

const User = require('./models/user');

const MONGODB_URI = 'mongodb+srv://areskise:24110399@cluster0.vsce8sb.mongodb.net/shop';

const app = express();
const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions'
});

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    unset: 'destroy',
    store: store
    })
);
app.use(flash());

app.use((req, res, next) => {
    if (!req.session.user) {
        return next();
    }
    User.findById(req.session.user._id)
    .then(user => {
        console.log(user);
        req.user = user;
        next();
    })
    .catch(err => console.log(err));
});

app.use(authRoutes);
app.use(productRoutes);
app.use(cartRoutes);

mongoose
    .connect(MONGODB_URI)
    .then(result => app.listen(5000))
    .catch(err => console.log(err));