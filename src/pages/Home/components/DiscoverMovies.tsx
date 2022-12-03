import { SimpleGrid, Skeleton, Stack } from '@chakra-ui/react';
import MovieCard from '@/components/MovieCard/MovieCard';
import { useMovies } from '@/services/moviesService';
import ErrorBanner from '@/components/ErrorBanner/ErrorBanner';

const DiscoverMovies = () => {
  const { data, isLoading, isError } = useMovies();

  const skeletonLines = [...Array(20).keys()];

  if (isLoading) {
    return (
      <SimpleGrid minChildWidth="240px" spacing="20px">
        {skeletonLines.map((line) => (
          <Stack key={line} sx={{ position: 'relative', paddingTop: '150%' }}>
            <Skeleton
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
              }}
            />
          </Stack>
        ))}
      </SimpleGrid>
    );
  }

  if (isError) {
    return <ErrorBanner />;
  }

  return (
    <SimpleGrid minChildWidth="240px" spacing="20px">
      {data?.results?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </SimpleGrid>
  );
};

export default DiscoverMovies;
