import React, {useContext} from "react";
import PageTemplate from "../components/movies/templateMovieListPage";
import {MoviesContext} from "../contexts/moviesContext";
import {useQueries} from "react-query";
import {getMovie} from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromMustWatch from '../components/cardIcons/removeFromMustWatch';
import WriteReview from "../components/cardIcons/writeReview";

const MustWatchPage = () => {
    const {mustWatch: movieIds} = useContext(MoviesContext);
    const mustWatchMovieQueries = useQueries(
        movieIds.map((movieId) => {
            return {
                queryKey: ["movie", {id: movieId}],
                queryFn: getMovie,
            };
        })
    ); 
    const isLoading = mustWatchMovieQueries.find((m) => m.isLoading === true);
    if (isLoading) return <Spinner/>;
    const movies = mustWatchMovieQueries.map((q) => q.data);

    return (
        <PageTemplate
            title="Your Must Watch Movies"
            movies={movies}
            action={(movie) => {
                return (
                    <>
                        <RemoveFromMustWatch movie={movie}/>
                        <WriteReview movie={movie}/>
                    </>
                );
            }}
        />

    );
};


export default MustWatchPage;