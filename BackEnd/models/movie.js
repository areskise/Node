const fs = require('fs');
const path = require('path');
const paging = require('../utils/paging');
const Genre = require('../models/genre');

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

	static trendingMovies(currentPage, cb) {Movies.all(allMovies => {
		const movies = allMovies.sort((a,b) => b.popularity  - a.popularity);
        const result = paging(movies, currentPage);
		cb(result)
		});
	}

	static topRatedMovies(currentPage, cb) {Movies.all(allMovies => {
		const movies = allMovies.sort((a,b) => b.vote_average  - a.vote_average);
        const result = paging(movies, currentPage);
		cb(result)
		});
	}

	static moviesByGenre(currentPage, genreId, cb) {Movies.all(allMovies => {
		const movies = allMovies.filter(movie => {
			if (movie.genre_ids) {
				if (movie.genre_ids.includes(genreId)) {
					return movie;
				}
			}
		});
        const result = paging(movies, currentPage, genreId);
		cb(result)
		});
	}

	static moviesBySearch(currentPage, keyword, genre, mediaType, language, year, cb) {Movies.all(allMovies => {
		const searchByKeyword = allMovies.filter(movies => {
			let hasOverview, hasTitle;
			if(keyword) {
				if(movies.overview){
					hasOverview = movies.overview.toLowerCase().includes(keyword.toLowerCase());
				}
				if(movies.title) {
					hasTitle = movies.title.toLowerCase().includes(keyword.toLowerCase());
				}
				if ( hasOverview || hasTitle ) {
					return movies	
				}
			}
		});
		
		
		const searchByGenre = searchByKeyword.filter(movies => {
			if(genre) {
				let moviesByGenre
				Genre.findIdByName(genre, genreId => {
					const hasGenre = movies.genre_ids.includes(genreId);
					if(hasGenre) {
						moviesByGenre = movies
					}
				})
				return moviesByGenre
			} else {
				return searchByKeyword
			}
		})

		const searchByType = searchByGenre.filter(movies => {
			if(mediaType) {
				const hasType = movies.media_type.includes(mediaType);
				if(hasType) {
					return movies
				}
			} else {
				return searchByGenre
			}
		})

		const searchByLanguage = searchByType.filter(movies => {
			if(language) {
				const hasLanguage = movies.original_language.includes(language);
				if(hasLanguage) {
					return movies
				}
			} else {
				return searchByType
			}
		})

		const searchByYear = searchByLanguage.filter(movies => {
			if(year) {
				let date 
				if(movies.release_date) {
					date = new Date(movies.release_date);
				} 
				if(movies.first_air_date) {
					date = new Date(movies.first_air_date);
				}
				if(date) {
					const release_year = date.getFullYear();
					if(release_year === year) {
						return movies
					}
				}
			} else {
				return searchByLanguage
			}
		})
		const result = paging(searchByYear, currentPage);
		cb(result);
	});
	}
}