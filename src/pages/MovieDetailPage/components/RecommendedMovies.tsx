import { useRecommendedMovies } from '@/services/moviesService';
import MovieList from '@/components/MovieList/MovieList';
import ErrorBanner from '@/components/ErrorBanner/ErrorBanner';
import MovieListSkeleton from '@/components/MovieList/MovieListSkeleton';
import { Heading, Stack } from '@chakra-ui/react';

type RecommendedMoviesProps = {
  movieId: string;
};

const RecommendedMovies = ({ movieId }: RecommendedMoviesProps) => {
  const { data, isError, isLoading } = useRecommendedMovies(movieId);

  if (isLoading) {
    return <MovieListSkeleton />;
  }

  if (isError) {
    return <ErrorBanner />;
  }

  const recommendedMovies = data.results;

  if (!recommendedMovies.length) {
    return null;
  }

  return (
    <Stack>
      <Heading as="h2" size="lg" mt={4} mb={2}>
        Recommended Movies
      </Heading>
      <MovieList movies={recommendedMovies} />
    </Stack>
  );
};

export default RecommendedMovies;
