import { SimpleGrid } from '@chakra-ui/react';
import MovieCard from '@/components/MovieCard/MovieCard';
import { useMovies } from '@/services/moviesService';

const DiscoverMovies = () => {
  const { data } = useMovies();
  return (
    <SimpleGrid minChildWidth="240px" spacing="20px">
      {data?.results?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </SimpleGrid>
  );
};

export default DiscoverMovies;
