import React from "react";
import PageTemplate from '../components/templateTvShowsListPage'
import {getTvSeries } from "../api/tmdb-api";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import { useQuery } from "react-query";
import Spinner from "../components/spinner";


const TvShowsPage = (props) => {
  const { data, error, isLoading, isError } = useQuery("tv", getTvSeries);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const tvShows = data ? data.results : [];

  return (
    <PageTemplate
      title='TV Series'
      movies={tvShows}
      action={(tvShow) => {
        return  <AddToFavouritesIcon movie={tvShow} />
      }}
      />
  );
};
export default TvShowsPage;