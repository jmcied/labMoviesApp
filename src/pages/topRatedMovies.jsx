import React, {useState} from "react"; // { useState, useEffect } redundant
import PageTemplate from '../components/templateMovieListPage'
import { getTopRatedMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

const TopRatedMoviesPage = (props) => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, error, isLoading, isError } = useQuery(["top-rated", {currentPage: currentPage}],getTopRatedMovies);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const topRatedMovies = data ? data.results : [];

  return (
    <PageTemplate
      title='Top Rated Movies'
      setCurrentPage={handlePageChange}
      movies={topRatedMovies}      
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
    />
  );
};
export default TopRatedMoviesPage;
