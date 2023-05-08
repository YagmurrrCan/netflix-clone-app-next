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
      {/* Random getirilecek bir popularMovie */}
      <FeaturedMovie
        movie={popularMovies[Math.floor(Math.random() * popularMovies.length)]}
      />

      {/* Kategori isimleri */}
      <Categories categories={categories.slice(1, 10)} />

      {/* Belirli bir category seçimi */}
      {!!selectedCategory.movies.length && (
        <MoviesCard 
          title={categories.find(({ id }) => id === +selectedCategory.id)?.name}
          movies={selectedCategory.movies.slice(1, 19)}
        />
      )}

      {/* Seçilen kategori var mı varsa sadece o yoksa popular ve top-rated  */}
      {selectedCategory.movies.length === 0 && (
              <MoviesCard title="Popular Films" movies={popularMovies.slice(1, 13)} />
            )}

      {selectedCategory.movies.length === 0 && (
        <MoviesCard title="Top Rated Films" movies={topRatedMovies.slice(1, 13)} />
      )}
    </div>
  );
}

export default HomePageContainer 