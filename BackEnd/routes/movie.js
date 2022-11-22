const express = require('express');

const movieController = require('../controllers/movie');

const router = express.Router();

router.get('/api/movies/trending', movieController.getTrendingMovies);

router.get('/api/movies/top-rate', movieController.getTopRateMovies);

router.get('/api/movies/discover', movieController.getMoviesByGenre);

router.post('/api/movies/video', movieController.postVideoMovies);

router.post('/api/movies/search', movieController.postSearchMovies);

module.exports = router;