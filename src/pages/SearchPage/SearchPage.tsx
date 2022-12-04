import { useSearchParams } from 'react-router-dom';

import { useSearchMovies } from '@/services/moviesService';
import ErrorBanner from '@/components/ErrorBanner/ErrorBanner';
import MovieList from '@/components/MovieList/MovieList';
import MovieListSkeleton from '@/components/MovieList/MovieListSkeleton';
import EmptyList from '@/components/EmptyList/EmptyList';
import { searchParamsKeys } from '@/constants';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const queryText = searchParams.get(searchParamsKeys.QUERY_TEXT) || '';
  const { data, isLoading, isError } = useSearchMovies(queryText);

  if (isLoading) {
    return <MovieListSkeleton />;
  }

  if (isError) {
    return <ErrorBanner />;
  }

  const movies = data.results;
  const emptyDescription = `No results found for ${queryText}. Please try another keyword`;

  if (!movies.length) {
    return <EmptyList description={emptyDescription} />;
  }

  return <MovieList movies={data.results} />;
};

export default SearchPage;
