import { Grid, GridItem } from '@chakra-ui/react';
import MovieCard from '@/components/MovieCard/MovieCard';
import { useMovies } from '@/services/moviesService';

const DiscoverMovies = () => {
  const { data } = useMovies();
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6} marginBottom="2">
      {data?.results?.map((movie) => (
        <GridItem key={movie.id}>
          <MovieCard movie={movie} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default DiscoverMovies;
