// const API_KEY = '504b85f6fe0a10a9c7f35945e14e7ddf';
const token = "8qlOkxz4wq";

const requests = {
	// fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
	fetchTrending: `/api/movies/trending?token=${token}`,
	fetchTopRated: `/api/movies/top-rate?token=${token}`,
	fetchActionMovies: `/api/movies/discover?token=${token}&genreId=28`,
	fetchComedyMovies: `/api/movies/discover?token=${token}&genreId=35`,
	fetchHorrorMovies: `/api/movies/discover?token=${token}&genreId=27`,
	fetchRomanceMovies: `/api/movies/discover?token=${token}&genreId=10749`,
	fetchDocumentaries: `/api/movies/discover?token=${token}&genreId=99`,
	fetchVideoMovies: `/api/movies/video?token=${token}`,
	fetchSearch: `/api/movies/search?token=${token}`,
	fetchGenres:  `/api/genres?token=${token}`,
	fetchMediaTypes: `/api/mediaTypes?token=${token}`,
	fetchNotFound: `?token=${token}`,
};

export default requests;
