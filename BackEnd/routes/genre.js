const express = require('express');

const genreController = require('../controllers/genre');

const router = express.Router();

router.get('/api/genres', genreController.getGenres);

module.exports = router;