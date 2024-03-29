import React, {useState} from "react"; // { useState, useEffect } redundant
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";

const UpcomingMoviesPage = (props) => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, error, isLoading, isError } = useQuery(["upcoming", {currentPage: currentPage}],getUpcomingMovies);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

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
      setCurrentPage={handlePageChange}
      movies={upcomingMovies}      
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />
      }}
    />
  );
};
export default UpcomingMoviesPage;
