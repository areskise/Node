const Movie = require('../models/movie');
const Genre = require('../models/genre');
const Video = require('../models/video');
const { Paging, genrePaging, basicSearchPaging, advencedSearchPaging } = require('../utils/paging');

exports.getTrendingMovies = (req, res, next) => {
    Movie.fetchAll((movies) => {
        movies.sort((a,b) => b.popularity  - a.popularity);
        const currentPage = req.query.page ? parseInt(req.query.page) : 1;
        const result = Paging(movies, currentPage);
        res.statusCode = 200;
        res.send(result);
    });
}

exports.getTopRateMovies = (req, res, next) => {
    Movie.fetchAll((movies) => {
        movies.sort((a,b) => b.vote_average  - a.vote_average);
        const currentPage = req.query.page ? parseInt(req.query.page) : 1;
        const result = Paging(movies, currentPage);
        res.statusCode = 200;
        res.send(result);
    });
}

exports.getMoviesByGenre = (req, res, next) => {
    Movie.fetchAll((movies) => {
        Genre.fetchAll((genres) => {
            const genreId = parseInt(req.query.genreId);
            const genre = genres.find(genre => genre.id === genreId);
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
                const currentPage = req.query.page ? parseInt(req.query.page) : 1;
                const result = genrePaging(movies, currentPage, genreId);
                result.genre_name = genre.name;
                res.statusCode = 200;
                res.send(result);
            }
        });
    });
}

exports.postVideoMovies = (req, res, next) => {
    Video.fetchAll((videos) => {
        const movieId = parseInt(req.query.id);
        const videoMovies = videos.find(video => video.id === movieId);
        if(!movieId) {
            res.statusMessage = "Not found film_id parram";
            res.statusCode = 400;
            res.end();
        }
        if(!videoMovies) {
            res.statusMessage = "Not found video";
            res.statusCode = 400;
            res.end();
        }
        else {
            const result = videoMovies.videos.sort((a,b) => b.published_at - a.published_at).find(video => {
                if(video.official && video.site === "YouTube") {
                    if(video.type === "Trailer"){
                        return video;
                    }
                    else if (video.type === "Teaser") {
                        return video;
                    }
                }
            });
            res.statusCode = 200;
            res.send(result);
        }
    });
}

exports.postSearchMovies = (req, res, next) => {
    Movie.fetchAll((movies) => {
        const keyword = req.query.query;
        const genre = req.query.genre;
        const mediaType = req.query.mediaType;
        const language = req.query.language;
        const year = req.query.year;
        if(!keyword || keyword === "") {
            res.statusMessage = "Not found keyword parram";
            res.statusCode = 400;
            res.end();
        }
        else {
            const currentPage = req.query.page ? parseInt(req.query.page) : 1;
            if(!genre && !mediaType && !language && !year) {
                const result = basicSearchPaging(movies, currentPage, keyword);
                res.statusCode = 200;
                res.send(result);
            }
            if(genre || mediaType || language || year) {
                const result = advencedSearchPaging(movies, currentPage, keyword, genre, mediaType, language, year);
                res.statusCode = 200;
                res.send(result);
            }
        }
    });
}