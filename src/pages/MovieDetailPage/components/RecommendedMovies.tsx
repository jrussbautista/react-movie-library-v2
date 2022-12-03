import { useRecommendedMovies } from '@/services/moviesService';
import MovieList from '@/components/MovieList/MovieList';
import ErrorBanner from '@/components/ErrorBanner/ErrorBanner';
import MovieListSkeleton from '@/components/MovieList/MovieListSkeleton';

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

  return <MovieList movies={data.results} />;
};

export default RecommendedMovies;
