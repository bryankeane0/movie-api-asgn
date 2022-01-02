import fetch from 'node-fetch';

export const getUpcomingMovies = () => {
    return fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    ).then((response) => {
        if (!response.ok) throw new Error(response.json().message);
        return response.json();
    }).catch((error) => {
            throw error
        });
};

export const getMovies = () => {
    return fetch(
        '/api/movies', {headers: {
            'Authorization': window.localStorage.getItem('token')
       }
    }).then((response) => {
        if (!response.ok) throw new Error(response.json().message);
        return response.json();
    })
        .catch((e) => {
            throw e
        });
};
