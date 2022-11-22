// const API_KEY = '504b85f6fe0a10a9c7f35945e14e7ddf';
const token = "8qlOkxz4wq";

const requests = {
	// fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
	fetchTrending: `http://localhost:5000/api/movies/trending?token=${token}`,
	fetchTopRated: `http://localhost:5000/api/movies/top-rate?token=${token}`,
	fetchActionMovies: `http://localhost:5000/api/movies/discover?token=${token}&genreId=28`,
	fetchComedyMovies: `http://localhost:5000/api/movies/discover?token=${token}&genreId=35`,
	fetchHorrorMovies: `http://localhost:5000/api/movies/discover?token=${token}&genreId=27`,
	fetchRomanceMovies: `http://localhost:5000/api/movies/discover?token=${token}&genreId=10749`,
	fetchDocumentaries: `http://localhost:5000/api/movies/discover?token=${token}&genreId=99`,
	fetchVideoMovies: `http://localhost:5000/api/movies/video?token=${token}`,
	fetchSearch: `http://localhost:5000/api/movies/search?token=${token}`,
};

export default requests;
