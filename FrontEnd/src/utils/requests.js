// const API_KEY = '504b85f6fe0a10a9c7f35945e14e7ddf';
const token = "8qlOkxz4wq";

const requests = {
	// fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
	fetchTrending: `/movies/trending?token=${token}`,
	fetchTopRated: `/movies/top-rate?token=${token}`,
	fetchActionMovies: `/movies/discover?token=${token}&genreId=28`,
	fetchComedyMovies: `/movies/discover?token=${token}&genreId=35`,
	fetchHorrorMovies: `/movies/discover?token=${token}&genreId=27`,
	fetchRomanceMovies: `/movies/discover?token=${token}&genreId=10749`,
	fetchDocumentaries: `/movies/discover?token=${token}&genreId=99`,
	fetchVideoMovies: `/movies/video?token=${token}`,
	fetchSearch: `/movies/search?token=${token}`,
	fetchGenres:  `/genres?token=${token}`,
	fetchMediaTypes: `/mediaTypes?token=${token}`,
};

export default requests;
