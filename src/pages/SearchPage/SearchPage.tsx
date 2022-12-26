import { useSearchParams } from 'react-router-dom';

import { Button, Flex } from '@chakra-ui/react';
import { useInfiniteSearchMovies } from '@/services/moviesService';
import ErrorBanner from '@/components/ErrorBanner/ErrorBanner';
import MovieList from '@/components/MovieList/MovieList';
import MovieListSkeleton from '@/components/MovieList/MovieListSkeleton';
import EmptyList from '@/components/EmptyList/EmptyList';
import { searchParamsKeys } from '@/constants';
import Meta from '@/components/Meta/Meta';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const queryText = searchParams.get(searchParamsKeys.QUERY_TEXT) || '';
  const {
    data,
    isLoading,
    isError,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteSearchMovies(queryText);

  if (isLoading || (isFetching && !isFetchingNextPage)) {
    return <MovieListSkeleton />;
  }

  if (isError) {
    return <ErrorBanner />;
  }

  const handleLoadMore = () => {
    fetchNextPage();
  };

  const { pages } = data;

  const emptyDescription = `No results found for ${queryText}. Please try another keyword`;
  const metaTitle = `Search Movies - ${queryText}`;

  if (!pages.length) {
    return <EmptyList description={emptyDescription} />;
  }

  return (
    <>
      <Meta title={metaTitle} />
      {pages.map(({ page, results }) => (
        <MovieList key={page} movies={results} />
      ))}
      <Flex mt={10} alignItems="center" justifyContent="center">
        <Button
          variant="solid"
          size="lg"
          color="red.500"
          onClick={handleLoadMore}
          disabled={!hasNextPage || isFetchingNextPage}
          isLoading={isFetchingNextPage}
        >
          Load More
        </Button>
      </Flex>
    </>
  );
};

export default SearchPage;
