const fs = require('fs');
const path = require('path');

const Path = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'movieList.json'
);

const Movies = {
	all: function(cb) {
		return cb(JSON.parse(fs.readFileSync(Path)));
	},
}

module.exports = class Movie {
	static fetchAll(cb) {
		Movies.all(cb);
	}
}