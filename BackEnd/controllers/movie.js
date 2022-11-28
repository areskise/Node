const Movie = require('../models/movie');
const Genre = require('../models/genre');
const Video = require('../models/video');

exports.getTrendingMovies = (req, res, next) => {
    const currentPage = req.query.page ? parseInt(req.query.page) : 1;
    Movie.trendingMovies(currentPage, result => {
        res.statusCode = 200;
        res.send(result);
    });
}

exports.getTopRateMovies = (req, res, next) => {
    const currentPage = req.query.page ? parseInt(req.query.page) : 1;
    Movie.topRatedMovies(currentPage, result => {
        res.statusCode = 200;
        res.send(result);
    });
}

exports.getMoviesByGenre = (req, res, next) => {
    const currentPage = req.query.page ? parseInt(req.query.page) : 1;
    const genreId = parseInt(req.query.genreId);
    Genre.findById(genreId, genre => {
        if(!genreId) {
            res.statusMessage = "Not found genre parram";
            res.statusCode = 400;
            res.end();
        }
        if(!genre) {
            res.statusMessage = "Not found that genre id";
            res.statusCode = 400;
            res.end();
        }
        else {
            Movie.moviesByGenre(currentPage, genreId, result => {
                result.genre_name = genre.name;
                res.statusCode = 200;
                res.send(result);
            });
        }
    });
}

exports.postVideoMovies = (req, res, next) => {
    const movieId = parseInt(req.query.id);
    Video.findById(movieId, foundVideos => {
        if(!movieId) {
            res.statusMessage = "Not found film_id parram";
            res.statusCode = 400;
            res.end();
        }
        if(!foundVideos) {
            res.statusMessage = "Not found video";
            res.statusCode = 400;
            res.end();
        }
        else {
            Video.videoMovies(foundVideos, result => {
                if(!result) {
                    res.statusMessage = "Not found video";
                    res.statusCode = 400;
                    res.end();
                } else {
                    res.statusCode = 200;
                    res.send(result);
                }
            });
        }
    });
}

exports.postMoviesBySearch = (req, res, next) => {
    const currentPage = req.query.page ? parseInt(req.query.page) : 1;
    const keyword = req.body.keyword;
    const genre = req.body.genre;
    const mediaType = req.body.mediaType;
    const language = req.body.language;
    const year = +req.body.year;
    Movie.moviesBySearch(currentPage, keyword, genre, mediaType, language, year, result  => {
        if(!keyword || keyword === "") {
            res.statusMessage = "Not found keyword parram";
            res.statusCode = 400;
            res.end();
        }
        else {
            res.statusCode = 200;
            res.send(result);
        }
    });
}