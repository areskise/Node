const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const movieRoutes = require('./routes/movie');
const videoRoutes = require('./routes/video');
const userRoutes = require('./routes/user');
const genreRoutes = require('./routes/genre');
const mediaTypeRoutes = require('./routes/mediaType');
const authorizedRoute = require("./middleware/authorized");
const notFoundRoute = require("./middleware/notFoundRoute");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(authorizedRoute);
app.use(movieRoutes);
app.use(videoRoutes);
app.use(userRoutes);
app.use(genreRoutes);
app.use(mediaTypeRoutes);
app.use(notFoundRoute);

app.listen(5000);