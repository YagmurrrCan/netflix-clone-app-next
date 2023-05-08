import React from "react";
import HomeContainer from "@/containers/home";

import { getSingleCategory, getCategories, getTopRatedMovies, getPopularMovies } from "@/services/movie";

// async function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

async function HomePage( {params} ) {
  let selectedCategory;

  const topRatedPromise = getTopRatedMovies();
  const popularMoviePromise = getPopularMovies();
  const categoryPromise = getCategories();

  const [ {results : topRatedMovies}, {results: popularMovies},  {genres: categories}] = await Promise.all( [
    topRatedPromise,
    popularMoviePromise,
    categoryPromise
  ])


  if(params.category?.length > 0) { 
    const {results} = await getSingleCategory(params.category[0]);
    selectedCategory = results;
  }

  return (
    <HomeContainer 
      topRatedMovies = { topRatedMovies }
      popularMovies = { popularMovies }
      categories = { categories }
      selectedCategory = {{
        id: params.category?.[0] ?? "", 
        movies: selectedCategory ? selectedCategory.slice(0, 20) : [],
      }} 
    />
  );
}

export default HomePage

