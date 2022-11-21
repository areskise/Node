const API_KEY = '504b85f6fe0a10a9c7f35945e14e7ddf';

const requests = {
	fetchTrending: `http://localhost:5000/api/movies/trending`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
	fetchTopRated: `http://localhost:5000/api/movies/top-rate`,
	fetchActionMovies: `http://localhost:5000/api/movies/discover?genreId=28`,
	fetchComedyMovies: `http://localhost:5000/api/movies/discover?genreId=35`,
	fetchHorrorMovies: `http://localhost:5000/api/movies/discover?genreId=27`,
	fetchRomanceMovies: `http://localhost:5000/api/movies/discover?genreId=10749`,
	fetchDocumentaries: `http://localhost:5000/api/movies/discover?genreId=99`,
	fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
};

export default requests;
