const MediaType = require('../models/mediaType');

exports.getMediaTypes = (req, res, next) => {
    MediaType.fetchAll((mediaTypes) => {
        res.send(mediaTypes);
    });
};