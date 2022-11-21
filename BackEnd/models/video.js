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
}