import React from "react";

import FeaturedMovie from "@/components/featured-movie";
import Categories from "@/components/categories";
import MoviesCard from '@/components/movies-cards'

function HomePageContainer({
  popularMovies,
  topRatedMovies,
  categories,
  selectedCategory,
}) {
  return (
    <div>
      <FeaturedMovie
        movie={popularMovies[Math.floor(Math.random() * popularMovies.length)]}
      />

      <Categories categories={categories.slice(1, 9)} />

      {!!selectedCategory.movies.length && (
        <MoviesCard
          title={categories.find(({ id }) => id === +selectedCategory.id)?.name}
          movies={selectedCategory.movies.slice(1, 7)}
        />
      )}
      <MoviesCard title="Popular Films" movies={popularMovies.slice(1, 9)} />

      <MoviesCard
        title="Your favorites"
        movies={topRatedMovies.slice(1, 13)}
      />
    </div>
  );
}

export default HomePageContainer 