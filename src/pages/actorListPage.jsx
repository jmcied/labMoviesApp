import React, {useState} from "react"; // { useState, useEffect } redundant
import PageTemplate from '../components/templateActorListPage'
import { getActors } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

const ActorListPage = (props) => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, error, isLoading, isError } = useQuery(["actors", {currentPage: currentPage}],getActors);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const actors = data ? data.results : [];

  const addToFavourites = (actorId) => {
    const updatedActors = actors.map((m) =>
      m.id === actorId ? { ...m, favourite: true } : m
    );
    setActors(updatedActors);
  };

  return (
    <PageTemplate
      title='Actors'
      setCurrentPage={handlePageChange}
      actors={actors}           
      action={(actor) => {
        return <AddToFavouritesIcon actor={actor} />
      }} 
    />
  );
};
export default ActorListPage;
