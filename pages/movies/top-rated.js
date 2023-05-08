import { getTopRatedMovies } from '../../services/movie';

export const getServerSideProps = async () => {
  const { results } = await getTopRatedMovies();
  return {
    props: {
      movies: results,
    },
  };
};

const TopRatedPage = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default TopRatedPage;
