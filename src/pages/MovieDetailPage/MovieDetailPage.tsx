import {
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Skeleton,
  Stack,
  Text,
 Icon } from '@chakra-ui/react';
import { MdFavorite } from 'react-icons/md';
import { useParams } from 'react-router-dom';

import { useMovie } from '@/services/moviesService';
import { MOVIE_SRC_BASE_PATH } from '@/constants';
import ErrorBanner from '@/components/ErrorBanner/ErrorBanner';

import RecommendedMovies from './components/RecommendedMovies';
import Meta from '@/components/Meta/Meta';
import Rating from '@/components/Rating/Rating';
import movieUtils from '@/utils/movieUtils';
import favoriteMovieUtils from '@/utils/favoriteMoviesUtils';
import { useStore } from '@/store';
import ScrollToTop from '@/components/ScrollToTop';

const MovieDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: movie,
    isLoading,
    isFetching,
    isError,
  } = useMovie(id as string);

  const { favoriteMovies, addFavoriteMovie, removeFavoriteMovie } = useStore();

  const skeletonLines = [...Array(10).keys()];

  if (isLoading || isFetching) {
    return (
      <Stack>
        {skeletonLines.map((line) => (
          <Skeleton height="40px" key={line} />
        ))}
      </Stack>
    );
  }

  if (isError) {
    return (
      <ErrorBanner description="This movie may not exist or we've encountered an error. Please try again soon!" />
    );
  }

  const isFavorite = favoriteMovieUtils.checkIfMovieIsFavorite(
    favoriteMovies,
    movie.id
  );

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFavoriteMovie(movie);
    } else {
      addFavoriteMovie(movie);
    }
  };

  const imgSrc = `${MOVIE_SRC_BASE_PATH}/${movie.poster_path}`;
  const rating = movieUtils.calculateMovieRating(movie.vote_average);

  return (
    <>
      <ScrollToTop />
      <Meta title={movie.title} />
      <Flex flexDirection={{ base: 'column', md: 'row' }}>
        <Image
          src={imgSrc}
          alt={movie?.title}
          width={{ base: '100%', md: 300 }}
          mb={{ base: 2, md: 0 }}
        />
        <Stack flex={1} ml={{ base: 0, md: 10 }}>
          <Flex>
            <Heading>{movie.title}</Heading>
            <Flex flex={1} justifyContent="flex-end">
              <Button
                color={isFavorite ? 'red.400' : 'gray.400'}
                onClick={handleToggleFavorite}
              >
                <Icon as={MdFavorite} />
              </Button>
            </Flex>
          </Flex>
          <Rating value={rating} />
          <Text>{movie.overview}</Text>
          <Divider />
          {/* Genres */}
          <Flex>
            <Stack width={160}>
              <Text fontWeight="600">Genres</Text>
            </Stack>
            <Flex flex={1} flexWrap="wrap">
              {movie.genres.map((genre) => (
                <Text key={genre.id} sx={{ marginRight: 2 }}>
                  {genre.name}
                </Text>
              ))}
            </Flex>
          </Flex>
          {/* Released Date */}
          <Flex mb={4}>
            <Stack width={160}>
              <Text fontWeight="600">Released Date</Text>
            </Stack>
            <Flex flex={1}>
              <Text>{movie?.release_date}</Text>
            </Flex>
          </Flex>
          {/* Duration */}
          <Flex mb={4}>
            <Stack sx={{ width: 160 }}>
              <Text fontWeight="600">Duration</Text>
            </Stack>
            <Flex flex={1}>
              <Text>{movie?.runtime} minutes</Text>
            </Flex>
          </Flex>
          {/* Countries */}
          {movie?.countries && (
            <Flex mb={2}>
              <Stack width={160}>
                <Text fontWeight="600">Countries</Text>
              </Stack>
              <Flex flex={1}>
                {movie.countries.map((country) => (
                  <Text key={country.id} sx={{ marginRight: 2 }}>
                    {country.name}
                  </Text>
                ))}
              </Flex>
            </Flex>
          )}
        </Stack>
      </Flex>
      <Stack mt={10} />
      <Divider />
      <RecommendedMovies movieId={id as string} />
    </>
  );
};

export default MovieDetailPage;
