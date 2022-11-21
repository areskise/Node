const express = require('express');

const videoController = require('../controllers/video');

const router = express.Router();

router.get('/api/videos', videoController.getVideos);

module.exports = router;