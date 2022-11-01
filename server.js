const express = require('express');
const cors = require('cors');

const app = express();

const users = [];

app.use(cors());
app.use(express.json());

app.get('/users', (req, res, next) => {
    res.send(users);
});

app.post('/add-user', (req, res, next) => {
    users.push({ username: req.body.username });
    console.log("users:", users);
});

app.listen(5000);