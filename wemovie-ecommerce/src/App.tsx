import { useEffect } from 'react';
import { useMovieStore } from './store/movies-store';

const App = () => {
  const [availableMovies, fetchMovies, isLoading] = useMovieStore((state) => [
    state.availableMovies,
    state.fetchMovies,
    state.isLoading,
  ]);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {availableMovies.map((movie) => (
            <p>{movie.title}</p>
          ))}
        </div>
      )}
    </>
  );
};

export default App;
