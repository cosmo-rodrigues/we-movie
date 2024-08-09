import { memo } from 'react';
import { useMovieStore } from '../../store';
import { Card } from './components';
import { CardsContainer, HeroContainer } from './style';
import { EmptyState } from '../empty-state';
import { groupedMovies } from '../../helpers/grouped-movies';

export const MovieCardComponent = () => {
  const movies = useMovieStore((state) => state.availableMovies);
  const fetchMovies = useMovieStore((state) => state.fetchMovies);
  const hasMovies = movies.length > 0;
  const totalByMovie = groupedMovies(movies);

  return (
    <HeroContainer>
      {hasMovies ? (
        <CardsContainer>
          {totalByMovie.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </CardsContainer>
      ) : (
        <EmptyState buttonTile="Recarregar página" buttonAction={fetchMovies} />
      )}
    </HeroContainer>
  );
};

export const MovieCard = memo(MovieCardComponent);
