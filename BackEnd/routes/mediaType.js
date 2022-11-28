const express = require('express');

const mediaTypeController = require('../controllers/mediaType');

const router = express.Router();

router.get('/api/mediaTypes', mediaTypeController.getMediaTypes);

module.exports = router;