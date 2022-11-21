const fs = require('fs');
const path = require('path');

const Path = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'genreList.json'
);

const Genres = {
	all: function(cb) {
		return cb(JSON.parse(fs.readFileSync(Path)));
	},
}

module.exports = class Genre {
	static fetchAll(cb) {
		Genres.all(cb);
	}
}