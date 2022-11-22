const resultLimit = 20;

const Paging = (movies, currentPage) => {
    const result = {
        results: [], 
        page: currentPage,
        total_pages: Math.ceil(movies.length / resultLimit)
    };
    const startIndex = (currentPage -1) * resultLimit;
    const endIndex = (currentPage * resultLimit);
    result.results = movies.slice(startIndex, endIndex);
    return result;
}

const genrePaging = (movies, currentPage, genreId) => {
    const moviesByGenre = movies.filter(movie => {
        if (movie.genre_ids) {
            if (movie.genre_ids.includes(genreId)) {
                return movie;
            }
        }
    });
    const result = {
        results: [], 
        page: currentPage,
        total_pages: Math.ceil(moviesByGenre.length / resultLimit),
        genre_name: '',
    };
    const startIndex = (currentPage -1) * resultLimit;
    const endIndex = (currentPage * resultLimit);
    result.results = moviesByGenre.slice(startIndex, endIndex);
    return result;
}

const basicSearchPaging = (movies, currentPage, keyword) => {
    const moviesBySearch = movies.filter(movie => {
        let hasOverview, hasTitle;
        if(movie.overview){
            hasOverview = movie.overview.toLowerCase().includes(keyword.toLowerCase());
        }
        if(movie.title) {
            hasTitle = movie.title.toLowerCase().includes(keyword.toLowerCase());
        }
        if ( hasOverview || hasTitle ) {
            return movie;
        }
    });
    const result = {
        results: [], 
        page: currentPage,
        total_pages: Math.ceil(moviesBySearch.length / resultLimit)
    };
    const startIndex = (currentPage -1) * resultLimit;
    const endIndex = (currentPage * resultLimit);
    result.results = moviesBySearch.slice(startIndex, endIndex);
    return result;
}

const advencedSearchPaging = (movies, currentPage, keyword, genre, mediaType, language, year) => {
    const moviesBySearch = movies.filter(movie => {
        let hasOverview, hasTitle;
        if(movie.overview){
            hasOverview = movie.overview.toLowerCase().includes(keyword.toLowerCase());
        }
        if(movie.title) {
            hasTitle = movie.title.toLowerCase().includes(keyword.toLowerCase());
        }
        if ( hasOverview || hasTitle ) {
            return movie;
        }
    });
    const result = {
        results: [], 
        page: currentPage,
        total_pages: Math.ceil(moviesBySearch.length / resultLimit)
    };
    const startIndex = (currentPage -1) * resultLimit;
    const endIndex = (currentPage * resultLimit);
    result.results = moviesBySearch.slice(startIndex, endIndex);
    return result;
}

module.exports = { 
    Paging: Paging,
    genrePaging: genrePaging,
    basicSearchPaging: basicSearchPaging,
    advencedSearchPaging: advencedSearchPaging
}