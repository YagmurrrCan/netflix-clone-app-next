import React from 'react'

import FeaturedMovieLoading from '@/components/featured-movie/loading'
import CategoriesLoading from '@/components/categories/loading'
import MoviesSectionLoading from '@/components/movies-cards/loading'

const Loading = () => {
  return (
    <div>
      <FeaturedMovieLoading/>
      <CategoriesLoading/>
      <MoviesSectionLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
    </div>
  )
}

export default Loading