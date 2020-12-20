async function fetchMovie(input) {
    return await fetch(
        `https://api.themoviedb.org/3/movie/${input}?api_key=${process.env.VUE_APP_K}&language=en-US&page=1`
        )
        .then((response) => response.json())
        .then((data) => {
            return data;
        });
    }
async function searchMovie(input) {
    return await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.VUE_APP_K}&language=en-US&query=${input}&page=1&include_adult=false`
        )
        .then((response) => response.json())
        .then((data) => {
            return data;
        });
    }
export { fetchMovie , searchMovie};
