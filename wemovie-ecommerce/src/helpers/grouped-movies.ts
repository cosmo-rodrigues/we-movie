import { GroupedMovie, MovieType } from '../store';

export const groupedMovies = (cartItems: MovieType[]) => {
  const result = cartItems.reduce((acc, movie) => {
    const existingMovieIndex = acc.findIndex((item) => item.id === movie.id);

    if (existingMovieIndex !== -1) {
      acc[existingMovieIndex].quantity += 1;
      acc[existingMovieIndex].subtotal += movie.price;
    } else {
      acc.push({ ...movie, quantity: 1, subtotal: movie.price });
    }

    return acc;
  }, [] as GroupedMovie[]);

  return result;
};
