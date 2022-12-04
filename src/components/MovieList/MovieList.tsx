import { SimpleGrid } from '@chakra-ui/react';
import MovieCard from '@/components/MovieCard/MovieCard';
import { Movie } from '@/types';

type MovieListProps = {
  movies: Movie[];
};

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </SimpleGrid>
  );
};

export default MovieList;
