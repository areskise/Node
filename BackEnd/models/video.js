const fs = require('fs');
const path = require('path');

const Path = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'videoList.json'
);

const Videos = {
	all: function(cb) {
		return cb(JSON.parse(fs.readFileSync(Path)));
	},
}

module.exports = class Video {
	static fetchAll(cb) {
		Videos.all(cb);
	}

	static findById(movieId, cb) {Videos.all(videos => {
		const video = videos.find(video => video.id === movieId);
		cb(video)
		});
	}

	static videoMovies(foundVideos, cb) {
		const suitableVideos = foundVideos.videos.filter(video => {
			if(video.official && video.site === "YouTube") {
				if(video.type === "Trailer"){
					return video;
				}
				else if (video.type === "Teaser") {
					return video;
				}
			}
		});
		if(suitableVideos.length > 1) {
			const lastPublished = new Date(Math.max(...suitableVideos.map(video => new Date(video.published_at)))).toISOString();
			const result = suitableVideos.find(video => video.published_at === lastPublished)
			cb(result)
		} else {
			const result = suitableVideos
			cb(result)
		}
	};
}