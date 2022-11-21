const fs = require('fs');
const path = require('path');

const Path = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'userToken.json'
);

const Users = {
	all: function(cb) {
		return cb(JSON.parse(fs.readFileSync(Path)));
	},
}

module.exports = class User {
	static fetchAll(cb) {
		Users.all(cb);
	}
}