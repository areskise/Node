const Genre = require('../models/genre');

exports.getGenres = (req, res, next) => {
    Genre.fetchAll((genres) => {
        res.send(genres);
    });
};