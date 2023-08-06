import React from "react"; // { useState, useEffect } redundant
import PageTemplate from '../components/templateMovieListPage'
import { getPopularMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

const PopularMoviesPage = (props) => {
  const { data, error, isLoading, isError } = useQuery("popular", getPopularMovies);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const popularMovies = data ? data.results : [];

  return (
    <PageTemplate
      title='Popular Movies'
      movies={popularMovies}      
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
    />
  );
};
export default PopularMoviesPage;
