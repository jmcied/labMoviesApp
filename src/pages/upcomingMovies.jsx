import React from "react"; // { useState, useEffect } redundant
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist'; 

const UpcomingMoviesPage = (props) => {
  const { data, error, isLoading, isError } = useQuery("upcoming", getUpcomingMovies);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const upcomingMovies = data ? data.results : [];

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={upcomingMovies}      
      action={() => {
        return <AddToPlaylistIcon />
      }}
    />
  );
};
export default UpcomingMoviesPage;
