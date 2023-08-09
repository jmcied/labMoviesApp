import React, { useState } from "react"; // , { useState, useEffect } redundant
import PageTemplate from "../components/templateMovieListPage";
import { getMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

const HomePage = (props) => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, error, isLoading, isError } = useQuery(["pages", {currentPage: currentPage}],getMovies);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data ? data.results : [];

  // Redundant, but necessary to avoid app crashing.
  // const favourites = movies.filter((m) => m.favorite);
  // localStorage.setItem("favourites", JSON.stringify(favourites));
  // const addToFavourites = (movieId) => true;

  return (
    <PageTemplate
      title="Discover Movies"
      setCurrentPage={handlePageChange}
      movies={movies}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
    />
  );
};
export default HomePage;
