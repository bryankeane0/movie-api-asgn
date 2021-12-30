import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import {QueryClientProvider, QueryClient} from "react-query";
import {ReactQueryDevtools} from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import TrendingMoviesPage from "./pages/trendingMoviesPage";
import NowPlayingPage from "./pages/nowPlayingPage";
import MustWatchPage from "./pages/mustWatchPage";
import { PublicPage, Movies, Profile, HomePage } from "./pages";
import LoginPage from "./loginPage";
import AuthProvider from "./authContext";
import PrivateRoute from "./privateRoute";
import AuthHeader from "./authHeader";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 360000,
            refetchInterval: 360000,
            refetchOnWindowFocus: false
        },
    },
});

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <SiteHeader/>
                <MoviesContextProvider>
                    {" "}
                    <Switch>
                        <Route exact path="/reviews/form" component={AddMovieReviewPage}/>
                        <Route exact path="/movies/upcoming" component={UpcomingMoviesPage}/>
                        <Route exact path="/movies/trending" component={TrendingMoviesPage}/>
                        <Route exact path="/reviews/:id" component={MovieReviewPage}/>
                        <Route exact path="/movies/favorites" component={FavoriteMoviesPage}/>
                        <Route exact path="/movies/must-watch" component={MustWatchPage}/>
                        <Route exact path="/movies/now-playing" component={NowPlayingPage}/>
                        <Route exact path="/movies/:id" component={MoviePage}/>
                        <Route exact path="/" component={HomePage}/>
                        <Redirect from="*" to="/"/>
                    </Switch>
                </MoviesContextProvider>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    );
};

ReactDOM.render(<App/>, document.getElementById("root"));
