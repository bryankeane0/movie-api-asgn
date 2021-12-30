export const getMovies = () => {
    return fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&region=GB`
    ).then((response) => {
        if (!response.ok) throw new Error(response.json().message);
        return response.json();
    })
        .catch((e) => {
            throw e
        });
};

export const getMovie = (args) => {
    const [, idPart] = args.queryKey;
    const {id} = idPart;
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then((response) => {
        if (!response.ok) throw new Error(response.json().message);
        return response.json();
    })
        .catch((e) => {
            throw e
        });
};

export const getGenres = async () => {
    return fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-GB`
        ).then((response) => {
            if (!response.ok) throw new Error(response.json().message);
            return response.json();
        })
        .catch((e) => {
            throw e
        });
};

export const getMovieImages = ({queryKey}) => {
    const [, idPart] = queryKey;
    const {id} = idPart;
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then((response) => {
        if (!response.ok) throw new Error(response.json().message);
        return response.json();

    }).catch((e) => {
        throw e
    });
};

export const getUpcoming = () => {  
    return fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&region=GB`
    ).then((response) => {
        if (!response.ok) throw new Error(response.json().message);
        return response.json();
    }).catch((e) => {
        throw e
    });
};

export const getMovieReviews = (id) => {
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
        .then((response) => response.json())
        .then((json) => {
            return json.results;
        });
};

export const getTrending = () => {
    return fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_KEY}`
      ).then((response) => {
        if (!response.ok) throw new Error(response.json().message);
        return response.json();
    }).catch((e) => {
        throw e
    });
};

export const getNowPlaying = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
      ).then((response) => {
        if (!response.ok) throw new Error(response.json().message);
        return response.json();
    }).catch((e) => {
        throw e
    });
};