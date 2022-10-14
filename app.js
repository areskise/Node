const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log('/users Middleware');
    res.send('<p>The Middleware that handles just /users</p>');
});

app.use('/', (req, res, next) => {
    console.log('/ Middleware');
    res.send('<p>The Middleware that handles just /</p>');
});

app.listen(3000);