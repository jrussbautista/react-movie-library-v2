import { SimpleGrid } from '@chakra-ui/react';
import MovieCard from '@/components/MovieCard/MovieCard';
import { Movie } from '@/types';

type MovieListProps = {
  movies: Movie[];
};

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <SimpleGrid minChildWidth="240px" spacing="20px">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </SimpleGrid>
  );
};

export default MovieList;
