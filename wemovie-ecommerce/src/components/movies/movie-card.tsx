import { useMovieStore } from '../../store/movies-store';
import { Card } from './components';
import { HeroContainer } from './style';

export const MovieCard = () => {
  const movies = useMovieStore((state) => state.availableMovies);
  return (
    <HeroContainer>
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </HeroContainer>
  );
};
