import { useParams } from 'react-router-dom';
import { Button, Flex } from '@chakra-ui/react';

import { useInfiniteDiscoverMovies } from '@/services/moviesService';
import ErrorBanner from '@/components/ErrorBanner/ErrorBanner';
import MovieList from '@/components/MovieList/MovieList';
import MovieListSkeleton from '@/components/MovieList/MovieListSkeleton';

type DiscoverMoviesProps = {
  selectedGenreId?: number;
};

const DiscoverMovies = ({ selectedGenreId }: DiscoverMoviesProps) => {
  const { name } = useParams<{ name: string }>();
  const {
    data,
    isLoading,
    isError,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteDiscoverMovies({
    name,
    genreId: selectedGenreId,
  });

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

  return (
    <>
      {pages.map(({ results: movies, page }) => (
        <MovieList key={page} movies={movies} />
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

export default DiscoverMovies;
