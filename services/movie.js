
// [...category]>page.js içinden gelir
const API_URL = 'https://api.themoviedb.org/3';

const fetchMovieAPI =  async (pathname, query= '') => {
    try {
        const res = await fetch( 
            `${API_URL}${pathname}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&${query}`
        );
        return res.json();
    } catch(error) {
        throw new Error(error);
    }
}

const getSingleCategory = async (genreId) => {
    return fetchMovieAPI('/discover/movie', `with_genres=${genreId}`)
    // const res = await fetch( 
    //   `${API_URL}/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=${genreId}`);
  
    //   return res.json();
  };
  
  const getCategories = async () => {
    return fetchMovieAPI('/genre/movie/list', `&page=1`)
    // const res = await fetch( 
    //   `${API_URL}/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=1`);
  
    //   return res.json();
  };
  
  const getTopRatedMovies = async () => {
    return fetchMovieAPI('/movie/top_rated', `&page=1`)
    // const res = await fetch(
    //   `${API_URL}/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=1`);
  
    //   return res.json();
  };
  
  const getPopularMovies = async () => {
    return fetchMovieAPI('/movie/popular', `&page=1`)
    // const res = await fetch(
    //   `${API_URL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=1`);
  
    //   return res.json();
  };



//   movie[id] içinden gelir
  const getMovie = async (movieId) => {
    return fetchMovieAPI(`/movie/${movieId}`)
    // const res = await fetch( 
    //   `${API_URL}/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`);
  
    //   return res.json();
  };
  

export {fetchMovieAPI, 
    getSingleCategory, 
    getCategories, 
    getTopRatedMovies, 
    getPopularMovies,
    getMovie
}