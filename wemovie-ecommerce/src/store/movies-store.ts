import { create } from 'zustand';

type Movie = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type MovieStore = {
  availableMovies: Movie[];
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

        // Apena para forçar a tela de loading
        await new Promise((resolve) => setTimeout(resolve, 2000));

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
