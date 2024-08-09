import { useEffect } from 'react';
import { MovieCard } from '../../components';
import { Header } from '../../components';
import { useMovieStore } from '../../store/movies-store';
import { HomeContainer, LoadingContainer } from './style';
import { LoadingSpinner } from '../../assets';

export const HomePage = () => {
  const [isLoading, fetchMovies] = useMovieStore((state) => [
    state.isLoading,
    state.fetchMovies,
  ]);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Header />
      <HomeContainer>
        {isLoading ? (
          <LoadingContainer>
            <LoadingSpinner />
          </LoadingContainer>
        ) : (
          <MovieCard />
        )}
      </HomeContainer>
    </>
  );
};
