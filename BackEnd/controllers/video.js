const Video = require('../models/video');

exports.getVideos = (req, res, next) => {
    Video.fetchAll((videos) => {
        res.send(videos);
    });
};