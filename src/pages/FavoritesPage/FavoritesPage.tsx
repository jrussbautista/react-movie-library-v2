import { Heading } from '@chakra-ui/react';
import EmptyList from '@/components/EmptyList/EmptyList';
import MovieList from '@/components/MovieList/MovieList';
import { useStore } from '@/store';

const FavoritesPage = () => {
  const { favoriteMovies } = useStore();
  return (
    <>
      <Heading size="lg" mb="4">
        Favorites
      </Heading>
      {!favoriteMovies.length && <EmptyList description="No favorites yet." />}
      {Boolean(favoriteMovies.length) && <MovieList movies={favoriteMovies} />}
    </>
  );
};

export default FavoritesPage;
