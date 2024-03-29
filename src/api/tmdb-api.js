export const getMovies = (args) => {
  console.log(args)
  const [, pagePart] = args.queryKey;
  const { currentPage } = pagePart;
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${currentPage}` //ToDo pagination
  ).then((response) => {
    if (!response.ok) {
      console.log(response)
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};
  
export const getMovie = (args) => {
   console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};
  
  export const getGenres = async () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        import.meta.env.VITE_TMDB_KEY +
        "&language=en-US"
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };  
  
  export const getMovieReviews = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
  };

      export const getUpcomingMovies = (args) => {
        console.log(args)
        const [, pagePart] = args.queryKey;
        const { currentPage } = pagePart;
        return fetch(       
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${currentPage}`
        ).then((response) => {
          if (!response.ok) {
            throw new Error(response.json().message);
          }
          return response.json();
        })
        .catch((error) => {
           throw error
        });
      };

      export const getPopularMovies = (args) => {
        console.log(args)
        const [, pagePart] = args.queryKey;
        const { currentPage } = pagePart;
        return fetch(        
          `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${currentPage}`
        ).then((response) => {
          if (!response.ok) {
            throw new Error(response.json().message);
          }
          return response.json();
        })
        .catch((error) => {
           throw error
        });
      };   

      export const getTopRatedMovies = (args) => {
        console.log(args)
        const [, pagePart] = args.queryKey;
        const { currentPage } = pagePart;
        return fetch(         
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${currentPage}`
        ).then((response) => {
          if (!response.ok) {
            throw new Error(response.json().message);
          }
          return response.json();
        })
        .catch((error) => {
           throw error
        });
      }; 
      
      export const getMovieImages = ({ queryKey }) => {
        const [, idPart] = queryKey;
        const { id } = idPart;
        return fetch(
          `https://api.themoviedb.org/3/movie/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
        ).then( (response) => {
          if (!response.ok) {
            throw new Error(response.json().message);
          }
          return response.json();
      
        })
        .catch((error) => {
          throw error
       });
      };


      export const getActors = (args) => {
        const [, pagePart] = args.queryKey;
        const { currentPage } = pagePart;
        return fetch( 
          `https://api.themoviedb.org/3/person/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${currentPage}` 
        ).then((response) => {
          if (!response.ok) {
            throw new Error(response.json().message);
          }
          return response.json();
        })
        .catch((error) => {
           throw error
        });
      };
      
      export const getActor = (args) => {
        console.log(args)
       const [, idPart] = args.queryKey;
       const { id } = idPart;
       return fetch(
         `https://api.themoviedb.org/3/person/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
       ).then((response) => {
         if (!response.ok) {
           throw new Error(response.json().message);
         }
         return response.json();
       })
       .catch((error) => {
         throw error
      });
     };

     export const getActorImages = ({ queryKey }) => {
      const [, idPart] = queryKey;
      const { id } = idPart;
      return fetch(
        `https://api.themoviedb.org/3/person/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
      ).then( (response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
    
      })
      .catch((error) => {
        throw error
     });
    };
      export const getTvShows = () => {
        return fetch(
          `https://api.themoviedb.org/3/discover/tv?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1` //ToDo pagination
        ).then((response) => {
          if (!response.ok) {
            throw new Error(response.json().message);
          }
          return response.json();
        })
        .catch((error) => {
           throw error
        });
      };
      
      export const getTvShow = (args) => {
        console.log(args)
       const [, idPart] = args.queryKey;
       const { id } = idPart;
       return fetch(
         `https://api.themoviedb.org/3/tv/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
       ).then((response) => {
         if (!response.ok) {
           throw new Error(response.json().message);
         }
         return response.json();
       })
       .catch((error) => {
         throw error
      });
     };

      export const getTvShowImages = ({ queryKey }) => {
        const [, idPart] = queryKey;
        const { id } = idPart;
        return fetch(
          `https://api.themoviedb.org/3/tv/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
        ).then( (response) => {
          if (!response.ok) {
            throw new Error(response.json().message);
          }
          return response.json();
      
        })
        .catch((error) => {
          throw error
       });
      };

      export const getTvSGenres = async () => {
        return fetch(
          "https://api.themoviedb.org/3/genre/tv/list?api_key=" +
            import.meta.env.VITE_TMDB_KEY +
            "&language=en-US"
        ).then( (response) => {
          if (!response.ok) {
            throw new Error(response.json().message);
          }
          return response.json();
        })
        .catch((error) => {
          throw error
       });
      }; 
