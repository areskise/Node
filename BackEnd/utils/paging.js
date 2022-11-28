const resultLimit = 20;

module.exports = paging = (movies, currentPage) => {
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