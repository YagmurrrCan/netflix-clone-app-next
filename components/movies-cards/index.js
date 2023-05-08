import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from './movies-cards.module.scss';

function MoviesCard({ title, movies }) {
  return (
    <div className={styles.moviesCard}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.movies}>
        {movies.map((movie) => (
          <div className={styles.movie} key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <Image
                fill
                unoptimized // image endpointlerinin blocklamasını önlemek için
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesCard;
