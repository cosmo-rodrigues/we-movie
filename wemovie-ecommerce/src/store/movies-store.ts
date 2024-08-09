import { create } from 'zustand';

export type MovieType = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type MovieStore = {
  availableMovies: MovieType[];
  isLoading: boolean;
  error: { code: number; message: string } | null;
  fetchMovies: () => void;
};

export const useMovieStore = create<MovieStore>((set) => {
  return {
    availableMovies: [],
    isLoading: false,
    error: null,
    fetchMovies: async () => {
      set({ isLoading: true });

      try {
        const response = await fetch(process.env.REACT_APP_API_URL);
        const movies = await response.json();

        set({ availableMovies: movies.products });
      } catch (error) {
        set({
          error: {
            message: (error as Error)?.message || 'Erro ao buscar filmes',
            code: (error as any)?.code || 500,
          },
        });
      } finally {
        set({ isLoading: false });
      }
    },
  };
});
