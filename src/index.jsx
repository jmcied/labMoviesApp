import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from './pages/upcomingMovies';
import PopularMoviesPage from "./pages/popularMovies";
import TopRatedMoviesPage from "./pages/topRatedMovies";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
//import TvShowsPage from './pages/tvShowsPage'
//import MustWatchMoviesPage from "./pages/mustWatchMoviesPage";
//<Route path="/movies/mustWatch" element={<MustWatchMoviesPage />} />

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
      <SiteHeader />
        <MoviesContextProvider>
          <Routes>
            <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
            <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
            <Route path="/movies/popular" element={<PopularMoviesPage />} />
            <Route path="/movies/topRated" element={<TopRatedMoviesPage />} />TopRatedMoviesPage
            <Route path="/reviews/:id" element={<MovieReviewPage/>} />
            <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
            <Route path="/movies/:id" element={<MoviePage />} />
{/*             <Route path="/tvShows" element={<TvShowsPage />} />
 */}            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </MoviesContextProvider>  
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>  
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
