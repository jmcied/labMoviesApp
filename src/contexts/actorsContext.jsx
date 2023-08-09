import React, { useState } from "react";

export const ActorsContext = React.createContext(null);

const ActorsContextProvider = (props) => {
  const [favourites, setFavourites] = useState([]);  
 // const [myReviews, setMyReviews] = useState( {} );
 // const [playlist, setPlaylist] = useState([]);

  const addToFavourites = (actor) => {
    let updatedFavourites = [...favourites];
    if (!favourites.includes(actor.id)) {
      updatedFavourites.push(actor.id);
    }
    setFavourites(updatedFavourites);
  };

  // We will use this function in a later section
  const removeFromFavourites = (actor) => {
    setFavourites(favourites.filter((mId) => mId !== actor.id));
  };

/*  const addReview = (movie, review) => {   // NEW
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
*/
/*  const addToPlaylist = (movie) => {
    let updatedPlaylist = [...playlist];
    if (!playlist.includes(movie.id)) {
      updatedPlaylist.push(movie.id);      
    }
    setPlaylist(updatedPlaylist);
    console.log(updatedPlaylist);
  };
*/  
  return (
    <ActorsContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
    //    addReview,
    //    addToPlaylist,
      }}
    >
      {props.children}
    </ActorsContext.Provider>
  );
};

export default ActorsContextProvider;
