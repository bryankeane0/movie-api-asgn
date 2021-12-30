import React from "react";
import MovieListHeader from "../components/movies/headerMovieList";

export default {
  title: "Home Page/Header",
  component: MovieListHeader,
};

export const Basic = () => <MovieListHeader title={'Discover Movies'} />;

Basic.storyName = "Default";