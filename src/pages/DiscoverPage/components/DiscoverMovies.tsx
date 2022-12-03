import { useParams } from 'react-router-dom';

import { useDiscoverMovies } from '@/services/moviesService';
import ErrorBanner from '@/components/ErrorBanner/ErrorBanner';
import { discoverNames } from '@/constants';
import MovieList from '@/components/MovieList/MovieList';
import MovieListSkeleton from '@/components/MovieList/MovieListSkeleton';

const DiscoverMovies = () => {
  const { name } = useParams<{ name: string }>();
  const { data, isLoading, isError } = useDiscoverMovies(
    name || discoverNames.POPULAR
  );

  if (isLoading) {
    return <MovieListSkeleton />;
  }

  if (isError) {
    return <ErrorBanner />;
  }

  return <MovieList movies={data.results} />;
};

export default DiscoverMovies;
