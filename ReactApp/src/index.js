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
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import PrivateRoute from "./components/privateRoute";
import AuthContextProvider from "./contexts/authContext";

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
                <AuthContextProvider>
                    <SiteHeader/>
                        <MoviesContextProvider>
                            {" "}
                            <Switch>
                                <Route exact path="/login" component={LoginPage}/>
                                <Route exact path="/reviews/form" component={AddMovieReviewPage}/>
                                <Route exact path="/movies/upcoming" component={UpcomingMoviesPage}/>
                                <Route exact path="/movies/trending" component={TrendingMoviesPage}/>
                                <Route exact path="/reviews/:id" component={MovieReviewPage}/>
                                <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage}/>
                                <PrivateRoute exact path="/movies/must-watch" component={MustWatchPage}/>
                                <Route exact path="/movies/now-playing" component={NowPlayingPage}/>
                                <Route exact path="/movies/:id" component={MoviePage}/>
                                <Route exact path="/" component={HomePage}/>
                                <Route exact path="/signup" component={SignUpPage}/>
                                <Redirect from="*" to="/"/>
                            </Switch>
                        </MoviesContextProvider>
                </AuthContextProvider>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    );
};

ReactDOM.render(<App/>, document.getElementById("root"));
