const fs = require('fs');
const path = require('path');

const Path = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'mediaTypeList.json'
);

const MediaTypes = {
	all: function(cb) {
		return cb(JSON.parse(fs.readFileSync(Path)));
	},
}

module.exports = class MediaType {
	static fetchAll(cb) {
		MediaTypes.all(cb);
	}
}